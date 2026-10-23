import { Container } from "@/components/layout/container"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <Container className="flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>{siteConfig.name}</p>
        <a
          href={siteConfig.repository}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          GitHub
        </a>
      </Container>
    </footer>
  )
}
