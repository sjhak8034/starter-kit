import type { Metadata } from "next";

import { ExampleCards } from "@/components/example-cards";

export const metadata: Metadata = {
  title: "예제",
  description: "웹 개발에 자주 필요한 패턴을 동작하는 예제로 정리했습니다.",
};

export default function ExamplesPage() {
  return (
    <>
      <header className="mb-15 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">예제</h1>
        <p className="text-muted-foreground">
          웹 개발에 자주 필요한 패턴을 동작하는 데모와 핵심 코드로 정리했습니다.
          소스는 <code className="font-mono text-sm">src/app/examples/</code>
          에 있습니다.
        </p>
      </header>
      <ExampleCards />
    </>
  );
}
