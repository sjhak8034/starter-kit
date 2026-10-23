"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// 모바일 Sheet는 열려 있는 동안 스크롤을 잠그므로, 닫힘 애니메이션(200ms)이 끝난 뒤 스크롤한다.
const SHEET_CLOSE_DELAY = 250

type MainNavProps = {
  orientation?: "horizontal" | "vertical"
  onNavigate?: () => void
}

export function MainNav({
  orientation = "horizontal",
  onNavigate,
}: MainNavProps) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [currentSection, setCurrentSection] = useState<string>("home")

  // 화면 세로 가운데를 지나는 섹션을 현재 섹션으로 본다.
  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrentSection(entry.target.id)
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    for (const { section } of siteConfig.nav) {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [isHome])

  function handleClick(event: React.MouseEvent, section: string) {
    onNavigate?.()
    // 다른 페이지에서는 Link가 /#section 으로 이동한다.
    if (!isHome) return

    event.preventDefault()
    const element = document.getElementById(section)
    if (!element) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const scroll = () => {
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
      history.replaceState(null, "", `#${section}`)
    }
    if (onNavigate) setTimeout(scroll, SHEET_CLOSE_DELAY)
    else scroll()
  }

  return (
    <nav
      className={cn(
        "flex gap-1",
        orientation === "vertical" ? "flex-col" : "items-center"
      )}
    >
      {siteConfig.nav.map(({ title, section }) => {
        // 홈에서는 보고 있는 섹션을, 다른 페이지에서는 /examples/* 처럼 같은 이름의 경로를 강조한다.
        const active = isHome
          ? currentSection === section
          : pathname.startsWith(`/${section}`)
        return (
          <Link
            key={section}
            href={`/#${section}`}
            onClick={(event) => handleClick(event, section)}
            aria-current={active ? "location" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted",
              active ? "bg-muted text-foreground" : "text-muted-foreground"
            )}
          >
            {title}
          </Link>
        )
      })}
    </nav>
  )
}
