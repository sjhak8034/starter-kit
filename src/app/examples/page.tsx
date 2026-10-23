import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { examples } from "@/config/site";

export const metadata: Metadata = {
  title: "예제",
  description: "웹 개발에 자주 필요한 패턴을 동작하는 예제로 정리했습니다.",
};

export default function ExamplesPage() {
  return (
    <>
      <header className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">예제</h1>
        <p className="text-muted-foreground">
          웹 개발에 자주 필요한 패턴을 동작하는 데모와 핵심 코드로 정리했습니다.
          소스는 <code className="font-mono text-sm">src/app/examples/</code>
          에 있습니다.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {examples.map(({ title, description, href, topics, icon: Icon }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-colors group-hover:ring-foreground/30">
              <CardHeader>
                <Icon className="mb-2 size-6 text-primary" />
                <CardTitle className="flex items-center gap-1">
                  {title}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {topics.map((topic) => (
                  <Badge key={topic} variant="outline">
                    {topic}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
