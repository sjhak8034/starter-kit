import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"

type CodeBlockProps = {
  code: string
  /** 터미널 명령어면 앞에 $ 프롬프트를 표시합니다. */
  terminal?: boolean
  className?: string
}

export function CodeBlock({ code, terminal, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-lg border bg-muted/50 p-3 text-left",
        className
      )}
    >
      <pre className="flex-1 overflow-x-auto font-mono text-sm leading-relaxed">
        <code>
          {terminal && (
            <span className="text-muted-foreground select-none">$ </span>
          )}
          {code}
        </code>
      </pre>
      <CopyButton value={code} />
    </div>
  )
}
