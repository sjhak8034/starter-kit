"use client";

import { Loader2, Send } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  useEffect(() => {
    if (state.status === "success") toast.success(state.message);
  }, [state]);

  return (
    <form action={formAction} noValidate className="max-w-lg space-y-5">
      <Field
        id="name"
        label="이름"
        error={state.errors?.name}
        defaultValue={state.values?.name}
      />
      <Field
        id="email"
        label="이메일"
        type="email"
        error={state.errors?.email}
        defaultValue={state.values?.email}
      />
      <div className="space-y-2">
        <Label htmlFor="message">메시지</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby="message-error"
          className={cn(
            "w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20"
          )}
        />
        <FieldError id="message-error" messages={state.errors?.message} />
      </div>
      {state.status === "error" && (
        <p aria-live="polite" className="text-sm text-destructive">
          {state.message}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
  defaultValue,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string[];
  defaultValue?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-error`}
      />
      <FieldError id={`${id}-error`} messages={error} />
    </div>
  );
}

function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p id={id} className="text-sm text-destructive">
      {messages[0]}
    </p>
  );
}

// useFormStatus는 <form> 안에서 렌더링되는 컴포넌트에서만 동작한다.
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : <Send />}
      {pending ? "보내는 중..." : "보내기"}
    </Button>
  );
}
