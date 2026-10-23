import type { Metadata } from "next";

import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { ExampleHeader, ExampleSection } from "../example-header";
import { DialogDemo, DropdownDemo, SheetDemo, ToastDemo } from "./demos";

export const metadata: Metadata = {
  title: "UI 컴포넌트 활용",
};

const sections = [
  {
    title: "Dialog",
    description: "확인, 입력 폼처럼 집중이 필요한 작업에 씁니다.",
    demo: <DialogDemo />,
    code: `<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>프로필 수정</DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>프로필 수정</DialogTitle></DialogHeader>
    ...
    <DialogFooter>
      <DialogClose render={<Button />}>저장</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },
  {
    title: "Sheet",
    description: "화면 가장자리에서 열리는 패널입니다. 모바일 내비, 알림, 필터에 씁니다.",
    demo: <SheetDemo />,
    code: `<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>알림 열기</SheetTrigger>
  <SheetContent side="right">...</SheetContent>
</Sheet>`,
  },
  {
    title: "Dropdown Menu",
    description: "계정 메뉴, 더보기 메뉴처럼 여러 동작을 묶을 때 씁니다.",
    demo: <DropdownDemo />,
    code: `<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>내 계정</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={...}>프로필</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">로그아웃</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    title: "Toast",
    description: "작업 결과를 잠깐 알려줍니다. <Toaster />는 루트 레이아웃에 이미 들어 있습니다.",
    demo: <ToastDemo />,
    code: `import { toast } from "sonner"

toast.success("저장했습니다")
toast.promise(upload(), { loading: "업로드 중...", success: "완료", error: "실패" })`,
  },
  {
    title: "Button과 Badge",
    description: "variant와 size 조합으로 위계를 표현합니다.",
    demo: (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>
    ),
    code: `<Button variant="outline" size="sm">취소</Button>
<Badge variant="secondary">New</Badge>`,
  },
  {
    title: "Skeleton",
    description: "데이터를 불러오는 동안 자리를 잡아 레이아웃이 흔들리지 않게 합니다.",
    demo: (
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    ),
    code: `<Skeleton className="size-12 rounded-full" />
<Skeleton className="h-4 w-48" />`,
  },
];

export default function UiExamplePage() {
  return (
    <>
      <ExampleHeader
        title="UI 컴포넌트 활용"
        description="설치된 shadcn/ui 컴포넌트를 실제 화면처럼 조합했습니다. 이 프로젝트의 shadcn은 @base-ui/react 기반이라 트리거를 버튼으로 바꿀 때 asChild 대신 render prop을 씁니다."
        learn={["render prop", "Dialog", "Sheet", "Dropdown", "Toast"]}
      />
      {sections.map((section) => (
        <ExampleSection
          key={section.title}
          title={section.title}
          description={section.description}
        >
          <div className="rounded-xl border p-6">{section.demo}</div>
          <CodeBlock code={section.code} />
        </ExampleSection>
      ))}
    </>
  );
}
