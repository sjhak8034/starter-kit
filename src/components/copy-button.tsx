"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CopyButtonProps = {
  value: string
  className?: string
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast.success("클립보드에 복사했습니다")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("복사하지 못했습니다. 직접 선택해 복사해 주세요")
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={handleCopy}
      aria-label={copied ? "복사됨" : "복사"}
      className={cn("shrink-0", className)}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  )
}
