"use client";

import { Bell, LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        프로필 수정
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            변경 사항을 입력하고 저장을 누르세요.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="dialog-name">이름</Label>
            <Input id="dialog-name" defaultValue="홍길동" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dialog-email">이메일</Label>
            <Input id="dialog-email" type="email" defaultValue="hong@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
          <DialogClose
            render={<Button />}
            onClick={() => toast.success("프로필을 저장했습니다")}
          >
            저장
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Bell />
        알림 열기
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>알림</SheetTitle>
          <SheetDescription>최근 알림 3개</SheetDescription>
        </SheetHeader>
        <ul className="space-y-3 px-4 text-sm">
          <li className="rounded-lg border p-3">새 댓글이 달렸습니다.</li>
          <li className="rounded-lg border p-3">배포가 완료되었습니다.</li>
          <li className="rounded-lg border p-3">팀원이 초대를 수락했습니다.</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export function DropdownDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <User />
        내 계정
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>hong@example.com</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => toast("프로필로 이동")}>
            <User /> 프로필
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toast("설정으로 이동")}>
            <Settings /> 설정
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => toast.error("로그아웃했습니다")}
        >
          <LogOut /> 로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("기본 알림입니다")}>
        기본
      </Button>
      <Button variant="outline" onClick={() => toast.success("저장했습니다")}>
        성공
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("요청을 처리하지 못했습니다")}
      >
        에러
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: "업로드 중...",
            success: "업로드 완료",
            error: "업로드 실패",
          })
        }
      >
        Promise
      </Button>
    </div>
  );
}
