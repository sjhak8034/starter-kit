"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type MainNavProps = {
  orientation?: "horizontal" | "vertical"
  onNavigate?: () => void
}

export function MainNav({
  orientation = "horizontal",
  onNavigate,
}: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex gap-1",
        orientation === "vertical" ? "flex-col" : "items-center"
      )}
    >
      {siteConfig.nav.map((item) => {
        const active = item.href === pathname
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
              active ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
