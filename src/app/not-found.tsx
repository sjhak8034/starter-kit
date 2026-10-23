import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-36 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold tracking-tight">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-muted-foreground">
        주소가 올바른지 확인하거나 홈으로 돌아가세요.
      </p>
      <Link href="/" className={buttonVariants()}>
        홈으로
      </Link>
    </Container>
  );
}
