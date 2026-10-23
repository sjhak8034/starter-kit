import { Layers, Moon, Palette, Rocket, type LucideIcon } from "lucide-react"

export const siteConfig = {
  name: "Starter Kit",
  description:
    "Next.js, TypeScript, shadcn/ui로 빠르게 시작하는 모던 웹 스타터킷입니다.",
  repository: "https://github.com/sjhak8034/starter-kit",
  nav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
  ],
} as const

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  // TODO(human): 프로젝트에 맞는 핵심 기능 카드를 정의하세요.
  {
    title: "빠른 시작",
    description: "clone 후 npm install, npm run dev만으로 바로 개발을 시작합니다.",
    icon: Rocket,
  },
  {
    title: "shadcn/ui 컴포넌트",
    description: "자주 쓰는 UI 컴포넌트가 미리 설치되어 있고, 필요하면 CLI로 추가합니다.",
    icon: Layers,
  },
  {
    title: "다크 모드",
    description: "라이트, 다크, 시스템 설정을 지원하는 테마 전환이 포함되어 있습니다.",
    icon: Moon,
  },
  {
    title: "일관된 디자인 토큰",
    description: "Tailwind v4와 CSS 변수로 색상과 간격을 한 곳에서 관리합니다.",
    icon: Palette,
  },
]

export const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "lucide-react",
] as const
