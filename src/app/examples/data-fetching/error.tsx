"use client";

import { RefreshCw, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";

export default function DataFetchingError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    // 실제 서비스라면 Sentry 같은 에러 수집 서비스로 보낸다.
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-destructive/30 bg-destructive/5 px-6 py-16 text-center">
      <TriangleAlert className="size-8 text-destructive" />
      <div>
        <h2 className="text-lg font-semibold">문제가 발생했습니다</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          error.tsx가 이 화면을 대신 보여주고 있습니다. 레이아웃(헤더, 푸터)은
          그대로 유지됩니다.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => retry()}>
          <RefreshCw />
          다시 시도
        </Button>
        <Link href="/examples/data-fetching" className={buttonVariants()}>
          에러 없이 다시 보기
        </Link>
      </div>
    </div>
  );
}
