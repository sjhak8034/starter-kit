import { Sparkles } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center gap-2">
        <MobileNav />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="size-5" />
          {siteConfig.name}
        </Link>
        <div className="ml-6 hidden md:block">
          <MainNav />
        </div>
        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
