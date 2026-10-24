"use client";

import { RefreshCw, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";

const RECOVER_HREF = "/examples/data-fetching";

export default function DataFetchingError({
  error,
  reset,
  retry,
}: {
  error: unknown;
  reset: () => void;
  retry: () => void;
}) {
  const router = useRouter();

  // 에러 경계는 pathname이 바뀔 때만 풀리므로, ?fail=1만 지우는 이동은 reset()을 같은 transition에서 함께 호출해야 한다.
  function recover(event: React.MouseEvent) {
    event.preventDefault();
    startTransition(() => {
      router.push(RECOVER_HREF);
      reset();
    });
  }

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
        <Link
          href={RECOVER_HREF}
          onClick={recover}
          className={buttonVariants()}
        >
          에러 없이 다시 보기
        </Link>
      </div>
    </div>
  );
}
