import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, siteConfig, techStack } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary">Next.js · TypeScript · shadcn/ui</Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            빠르게 시작하는 모던 웹 개발
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/about" className={cn(buttonVariants({ size: "lg" }))}>
              시작하기
              <ArrowRight />
            </Link>
            <a
              href={siteConfig.repository}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <ExternalLink />
              GitHub
            </a>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">
            주요 기능
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description, icon: Icon }) => (
              <Card key={title}>
                <CardHeader>
                  <Icon className="mb-2 size-6 text-primary" />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-12">
        <Container className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">기술 스택</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
