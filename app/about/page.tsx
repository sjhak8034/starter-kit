import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { techStack } from "@/config/site";

export const metadata: Metadata = {
  title: "소개",
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold tracking-tight">소개</h1>
      <p className="mt-2 text-muted-foreground">
        이 페이지는 레이아웃과 라우팅이 어떻게 재사용되는지 보여주는 예시입니다.
      </p>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>사용 중인 기술</CardTitle>
          <CardDescription>
            app/about/page.tsx 를 복사해 새 페이지를 만드세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}
