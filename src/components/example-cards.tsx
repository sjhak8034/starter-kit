import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { examples } from "@/config/site"

export function ExampleCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {examples.map(({ title, description, href, topics, icon: Icon }) => (
        <Link key={href} href={href} className="group">
          <Card className="h-full transition-colors group-hover:ring-foreground/30">
            <CardHeader>
              <Icon className="mb-2 size-6 text-primary" />
              <CardTitle className="flex items-center gap-1">
                {title}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {topics.map((topic) => (
                <Badge key={topic} variant="outline">
                  {topic}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
