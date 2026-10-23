import { ArrowRight, ExternalLink, LayoutGrid } from "lucide-react";
import Link from "next/link";

import { CodeBlock } from "@/components/code-block";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, siteConfig, techStack } from "@/config/site";
import { cn } from "@/lib/utils";

// sticky 헤더(site-header.tsx의 h-14 = 3.5rem)를 뺀 나머지를 한 화면으로 채우고 내용은 세로 가운데에 둔다.
// min-h라서 모바일처럼 내용이 더 길면 섹션이 늘어난다.
const screenSection = "flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16";

const steps = [
  {
    title: "저장소 복제",
    description: "스타터킷을 원하는 이름의 폴더로 내려받습니다.",
    code: "git clone https://github.com/sjhak8034/starter-kit.git my-app",
  },
  {
    title: "의존성 설치",
    description: "프로젝트 폴더로 이동해 패키지를 설치합니다.",
    code: "cd my-app && npm install",
  },
  {
    title: "개발 서버 실행",
    description: "http://localhost:3000 에서 바로 확인할 수 있습니다.",
    code: "npm run dev",
  },
  {
    title: "내 프로젝트로 바꾸기",
    description:
      "사이트 이름, 설명, 내비게이션을 한 파일에서 수정합니다. 새 페이지는 src/app/<경로>/page.tsx 로 추가합니다.",
    code: "src/config/site.ts",
  },
];

export default function Home() {
  return (
    <>
      <section className={screenSection}>
        <Container className="flex flex-col items-center gap-9 text-center">
          <Badge variant="secondary">Next.js 16 · React 19 · shadcn/ui</Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {siteConfig.description} 설정에 시간을 쓰지 말고 바로 기능 개발을
            시작하세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#getting-started"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              바로 시작하기
              <ArrowRight />
            </Link>
            <Link
              href="/examples"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <LayoutGrid />
              예제 보기
            </Link>
            <a
              href={siteConfig.repository}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              <ExternalLink />
              GitHub
            </a>
          </div>
          <div className="w-full max-w-2xl">
            <p className="mb-2 text-sm text-muted-foreground">빠른 설치</p>
            <CodeBlock code={siteConfig.installCommand} terminal />
          </div>
        </Container>
      </section>

      <section className={cn(screenSection, "border-t bg-muted/30")}>
        <Container>
          <SectionHeading
            title="기술 스택"
            description="검증된 최신 도구들로 구성했습니다. 카드를 누르면 공식 문서로 이동합니다."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map(({ name, version, role, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-foreground/30"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-medium">{name}</span>
                    <Badge variant="outline" className="font-mono">
                      v{version}
                    </Badge>
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {role}
                  </span>
                </span>
                <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className={screenSection}>
        <Container>
          <SectionHeading
            title="주요 기능"
            description="새 프로젝트마다 반복하던 설정을 미리 해두었습니다."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, points, icon: Icon }) => (
              <Card key={title}>
                <CardHeader>
                  <Icon className="mb-2 size-6 text-primary" />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="getting-started"
        className={cn(screenSection, "scroll-mt-14 border-t bg-muted/30")}
      >
        <Container className="max-w-3xl">
          <SectionHeading
            title="바로 시작하기"
            description="네 단계면 내 프로젝트를 띄울 수 있습니다."
          />
          <ol className="space-y-9">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1 space-y-2">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <CodeBlock code={step.code} terminal={index < 3} />
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-15 flex justify-center">
            <Link href="/examples" className={cn(buttonVariants({ size: "lg" }))}>
              예제 둘러보기
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
