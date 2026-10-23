import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type ExampleHeaderProps = {
  title: string;
  description: string;
  learn: string[];
};

export function ExampleHeader({ title, description, learn }: ExampleHeaderProps) {
  return (
    <header className="mb-15 space-y-4">
      <Link
        href="/examples"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        예제 목록
      </Link>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">이 예제에서 배우는 것</span>
        {learn.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </header>
  );
}

export function ExampleSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4 border-t py-12">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}
