# starter-kit

Next.js, TypeScript, shadcn/ui로 빠르게 웹 개발을 시작하기 위한 스타터킷입니다.

## 기술 스택

| 영역 | 사용 기술 |
| --- | --- |
| 프레임워크 | Next.js 16 (App Router), React 19 |
| 언어 | TypeScript (strict) |
| 스타일 | Tailwind CSS v4 |
| UI | shadcn/ui (`base-nova`, `@base-ui/react` 기반) |
| 아이콘 | lucide-react |
| 테마 | next-themes (라이트 / 다크 / 시스템) |

## 시작하기

```bash
git clone https://github.com/sjhak8034/starter-kit.git
cd starter-kit
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
src/
├── app/                 라우트 (홈, 소개, 404)
├── components/
│   ├── ui/              shadcn/ui 컴포넌트
│   ├── layout/          헤더, 푸터, 내비게이션, Container
│   └── ...              ThemeProvider, ThemeToggle
├── config/site.ts       사이트 이름, 내비, 기능 목록
└── lib/utils.ts         cn() 유틸
public/                  정적 파일
```

## 사용법

**사이트 정보 바꾸기**: `src/config/site.ts`에서 이름, 설명, 내비게이션, 기능 카드를 수정합니다.

**페이지 추가**: `src/app/<경로>/page.tsx`를 만들고, 내비에 보이려면 `src/config/site.ts`의 `nav`에 항목을 추가합니다.

**shadcn 컴포넌트 추가**:

```bash
npx shadcn@latest add tabs
```

**테마 색상 변경**: `src/app/globals.css`의 `:root`, `.dark` 변수를 수정합니다.

## 포함된 shadcn 컴포넌트

button, card, input, label, badge, separator, dialog, sheet, dropdown-menu, skeleton, sonner

## 참고

- `next.config.ts`에서 `cacheComponents`가 켜져 있습니다. 자세한 주의사항은 [CLAUDE.md](./CLAUDE.md)를 참고하세요.
