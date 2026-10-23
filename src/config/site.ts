import {
  Atom,
  Braces,
  Code,
  Component,
  DatabaseZap,
  FormInput,
  LayoutGrid,
  Moon,
  Palette,
  Server,
  Shapes,
  ShieldCheck,
  Smartphone,
  SunMoon,
  Wind,
  type LucideIcon,
} from "lucide-react"

export const siteConfig = {
  name: "Next.js Starter Kit",
  description:
    "Next.js, TypeScript, shadcn/ui로 빠르게 시작하는 모던 웹 스타터킷입니다.",
  repository: "https://github.com/sjhak8034/starter-kit",
  installCommand:
    "git clone https://github.com/sjhak8034/starter-kit.git my-app && cd my-app && npm install && npm run dev",
  nav: [
    { title: "홈", href: "/" },
    { title: "시작하기", href: "/#getting-started" },
    { title: "예제", href: "/examples" },
  ],
} as const

export type Feature = {
  title: string
  description: string
  points: string[]
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: "App Router와 Server Components",
    description: "Next.js 16의 최신 라우팅과 렌더링 방식을 기본으로 사용합니다.",
    points: [
      "Cache Components로 정적 셸과 스트리밍 결합",
      "Server Action으로 API 없이 폼 처리",
      "파일 기반 라우팅과 중첩 레이아웃",
    ],
    icon: Server,
  },
  {
    title: "TypeScript strict",
    description: "엄격한 타입 검사로 런타임 전에 실수를 잡습니다.",
    points: [
      "strict 모드와 @/* 경로 alias",
      "라우트 타입(LayoutProps 등) 자동 생성",
      "zod 스키마로 입력값 타입과 검증 일치",
    ],
    icon: ShieldCheck,
  },
  {
    title: "shadcn/ui 컴포넌트",
    description: "복사해서 소유하는 방식이라 자유롭게 수정할 수 있습니다.",
    points: [
      "Dialog, Sheet, Dropdown 등 11종 설치",
      "@base-ui/react 기반의 접근성 지원",
      "npx shadcn add로 필요할 때 추가",
    ],
    icon: Component,
  },
  {
    title: "Tailwind v4 디자인 토큰",
    description: "색상, 반경, 폰트를 CSS 변수 한 곳에서 관리합니다.",
    points: [
      "설정 파일 없이 globals.css에서 테마 정의",
      "oklch 색상으로 라이트/다크 일관성 유지",
      "cn()으로 클래스 충돌 없이 병합",
    ],
    icon: Palette,
  },
  {
    title: "다크 모드",
    description: "사용자 설정과 시스템 테마를 모두 지원합니다.",
    points: [
      "라이트 / 다크 / 시스템 3가지 모드",
      "새로고침 시 깜빡임 없는 테마 적용",
      "토스트 등 컴포넌트도 테마 자동 반영",
    ],
    icon: Moon,
  },
  {
    title: "반응형 레이아웃과 SEO",
    description: "모바일부터 데스크톱까지 바로 쓸 수 있는 뼈대를 제공합니다.",
    points: [
      "모바일 Sheet 내비게이션",
      "페이지별 title 템플릿과 description",
      "공통 Container로 일관된 여백",
    ],
    icon: Smartphone,
  },
]

export type Tech = {
  name: string
  version: string
  role: string
  href: string
  icon: LucideIcon
}

export const techStack: Tech[] = [
  {
    name: "Next.js",
    version: "16.4",
    role: "App Router 기반 React 프레임워크",
    href: "https://nextjs.org/docs",
    icon: Shapes,
  },
  {
    name: "React",
    version: "19.3",
    role: "UI 라이브러리, Server Components",
    href: "https://react.dev",
    icon: Atom,
  },
  {
    name: "TypeScript",
    version: "5",
    role: "정적 타입 검사",
    href: "https://www.typescriptlang.org/docs",
    icon: Braces,
  },
  {
    name: "Tailwind CSS",
    version: "4.3",
    role: "유틸리티 우선 CSS",
    href: "https://tailwindcss.com/docs",
    icon: Wind,
  },
  {
    name: "shadcn/ui",
    version: "4.22",
    role: "복사해서 쓰는 UI 컴포넌트",
    href: "https://ui.shadcn.com/docs",
    icon: Component,
  },
  {
    name: "lucide-react",
    version: "1.61",
    role: "아이콘 세트",
    href: "https://lucide.dev",
    icon: Code,
  },
  {
    name: "next-themes",
    version: "0.4",
    role: "다크 모드 테마 전환",
    href: "https://github.com/pacocoursey/next-themes",
    icon: SunMoon,
  },
  {
    name: "zod",
    version: "4.6",
    role: "스키마 기반 유효성 검사",
    href: "https://zod.dev",
    icon: ShieldCheck,
  },
]

export type Example = {
  title: string
  description: string
  href: string
  topics: string[]
  icon: LucideIcon
}

export const examples: Example[] = [
  {
    title: "폼과 유효성 검사",
    description: "Server Action과 zod로 폼을 제출하고 필드별 에러를 보여줍니다.",
    href: "/examples/forms",
    topics: ["Server Action", "useActionState", "zod"],
    icon: FormInput,
  },
  {
    title: "데이터 페칭과 로딩",
    description: "Server Component에서 데이터를 불러오고 Suspense로 로딩 UI를 보여줍니다.",
    href: "/examples/data-fetching",
    topics: ["Suspense", "use cache", "error.tsx"],
    icon: DatabaseZap,
  },
  {
    title: "UI 컴포넌트 활용",
    description: "설치된 shadcn/ui 컴포넌트를 실제로 조합하는 방법을 보여줍니다.",
    href: "/examples/ui",
    topics: ["Dialog", "Sheet", "Dropdown", "Toast"],
    icon: LayoutGrid,
  },
]
