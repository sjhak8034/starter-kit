# CLAUDE.md

Next.js App Router 기반 웹 스타터킷입니다. 이 문서는 AI 어시스턴트와 기여자를 위한 작업 가이드입니다.

## 명령어

```bash
npm run dev     # 개발 서버 (http://localhost:3000)
npm run build   # 프로덕션 빌드 (타입체크 포함)
npm run start   # 빌드 결과 실행
npm run lint    # ESLint
```

## 기술 스택

- Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- Tailwind CSS v4: `tailwind.config`가 없고 `src/app/globals.css`의 `@theme inline`에서 설정
- shadcn/ui (style `base-nova`): Radix가 아니라 `@base-ui/react` 기반
- lucide-react 1.x, next-themes

## 구조

```
src/app/                 라우트 (layout, page, not-found)
src/app/examples/        예제 (forms, data-fetching, ui). 데모 코드는 각 예제 폴더에 함께 둔다
src/components/ui/       shadcn 컴포넌트 (CLI로 추가)
src/components/layout/   헤더, 푸터, 내비게이션, Container
src/components/          code-block, copy-button, theme-provider, theme-toggle
src/config/site.ts       사이트 이름, 내비, 기능, 기술 스택, 예제 목록 등 설정 데이터
src/lib/utils.ts         cn() (clsx + tailwind-merge)
public/                  정적 파일
```

경로 alias `@/*`는 `src/*`를 가리킵니다.

## 규칙과 주의사항

- **Next 코드를 쓰기 전에** `node_modules/next/dist/docs/`의 해당 문서를 읽습니다. `AGENTS.md` 참고.
- `cacheComponents`가 켜져 있습니다. 데이터는 기본적으로 동적이므로 `new Date()`, `Math.random()`, `cookies()` 같은
  동적 API를 정적 셸(레이아웃 등)에서 직접 쓰면 프리렌더링 단계에서 빌드가 실패할 수 있습니다.
  또한 라우트 이동 시 이전 페이지가 `<Activity>`로 숨겨질 뿐 언마운트되지 않습니다.
  - 요청마다 달라지는 값: `await connection()` 후 사용하고 `<Suspense>`로 감쌉니다.
  - 캐시할 값: 함수 맨 위에 `"use cache"`와 `cacheLife(...)`를 둡니다.
  - 예시는 `src/app/examples/data-fetching/data.ts`를 참고합니다.
- `error.tsx`는 이 버전에서 `{ error: unknown; retry: () => void }`를 받습니다 (`reset`이 아니라 `retry`).
- zod는 v4입니다. 에러 정리는 `error.flatten()`이 아니라 `z.flattenError(error)`를 씁니다.
- 커스텀 훅은 만들지 않고 React, Next.js, next-themes 등 라이브러리 훅만 씁니다.
- shadcn 컴포넌트는 직접 작성하지 말고 `npx shadcn@latest add <name>`으로 추가합니다.
  - 생성된 파일이 `import { cn } from "cn"`을 쓰면 `@/lib/utils`로 고칩니다 (npm의 `cn` 패키지는 쓰지 않습니다).
  - 기존 파일 덮어쓰기 질문이 나오면 수정한 파일은 덮어쓰지 않습니다.
- base-ui 컴포넌트는 `asChild`가 아니라 `render` prop을 씁니다. 예: `<DropdownMenuTrigger render={<Button />}>`
- 링크 모양 버튼은 `<Link className={buttonVariants()}>`를 씁니다.
- lucide-react 1.x에는 브랜드 아이콘(`Github` 등)이 없습니다. eslint는 이를 잡지 못하니 `npm run build`로 확인합니다.
- 사이트 이름, 내비 항목은 `src/config/site.ts`에서만 수정합니다.
- 상단 메뉴(`nav`)는 홈 섹션으로 이동합니다. `nav[].section`은 `src/app/page.tsx`의 `<section id>`와 같아야 합니다.
  - 부드러운 스크롤은 `<html>`의 `motion-safe:scroll-smooth`와 `data-scroll-behavior="smooth"`(Next 16에서 페이지 이동 시 즉시 스크롤)로 처리합니다.
  - 현재 섹션 강조와 모바일 Sheet 닫힘 후 스크롤은 `src/components/layout/main-nav.tsx`에 있습니다.
