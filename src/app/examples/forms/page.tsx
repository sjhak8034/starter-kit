import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";

import { ExampleHeader, ExampleSection } from "../example-header";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "폼과 유효성 검사",
};

const actionCode = `"use server"

export async function submitContact(prevState: ContactState, formData: FormData) {
  const result = contactSchema.safeParse({ name: formData.get("name"), ... })
  if (!result.success) {
    return { status: "error", errors: z.flattenError(result.error).fieldErrors }
  }
  // DB 저장, 메일 발송 등
  return { status: "success", message: "접수되었습니다." }
}`;

const formCode = `"use client"

const [state, formAction] = useActionState(submitContact, initialState)

<form action={formAction}>
  <Input name="email" aria-invalid={Boolean(state.errors?.email)} />
  <SubmitButton />  {/* 내부에서 useFormStatus()로 pending 확인 */}
</form>`;

export default function FormsExamplePage() {
  return (
    <>
      <ExampleHeader
        title="폼과 유효성 검사"
        description="API 라우트 없이 Server Action으로 폼을 처리합니다. 검증은 서버에서 zod로 하고, 결과를 useActionState로 받아 필드별 에러를 보여줍니다."
        learn={["Server Action", "useActionState", "useFormStatus", "zod"]}
      />

      <ExampleSection
        title="데모"
        description="비워 두거나 잘못된 이메일을 넣고 보내 보세요. 제출 중에는 버튼이 비활성화됩니다."
      >
        <ContactForm />
      </ExampleSection>

      <ExampleSection
        title="1. 서버에서 검증하기"
        description="src/app/examples/forms/actions.ts"
      >
        <CodeBlock code={actionCode} />
      </ExampleSection>

      <ExampleSection
        title="2. 클라이언트에서 결과 받기"
        description="src/app/examples/forms/contact-form.tsx"
      >
        <CodeBlock code={formCode} />
      </ExampleSection>
    </>
  );
}
