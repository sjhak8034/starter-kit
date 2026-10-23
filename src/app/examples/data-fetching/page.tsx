import { TriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { ExampleHeader, ExampleSection } from "../example-header";
import { getCachedPosts, getLatestPosts, type Post } from "./data";

export const metadata: Metadata = {
  title: "데이터 페칭과 로딩",
};

const streamingCode = `async function LatestPosts() {
  const { posts } = await getLatestPosts()  // connection() 후 요청마다 실행
  return <PostList posts={posts} />
}

<Suspense fallback={<PostListSkeleton />}>
  <LatestPosts />
</Suspense>`;

const cachedCode = `export async function getCachedPosts() {
  "use cache"
  cacheLife("minutes")
  return db.posts.findMany()
}`;

const errorCode = `"use client"  // src/app/examples/data-fetching/error.tsx

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  return <button onClick={() => retry()}>다시 시도</button>
}`;

export default function DataFetchingExamplePage({
  searchParams,
}: PageProps<"/examples/data-fetching">) {
  return (
    <>
      <ExampleHeader
        title="데이터 페칭과 로딩"
        description="Server Component에서 데이터를 직접 불러옵니다. 느린 데이터는 Suspense로 감싸 로딩 UI를 먼저 보여주고, 자주 바뀌지 않는 데이터는 캐시합니다."
        learn={["async Server Component", "Suspense", "use cache", "error.tsx"]}
      />

      <ExampleSection
        title="1. 스트리밍: 요청마다 새로 불러오기"
        description="새로고침하면 스켈레톤이 1.5초 보인 뒤 목록이 나타나고, 불러온 시각이 매번 바뀝니다."
      >
        <Suspense fallback={<PostListSkeleton />}>
          <LatestPosts />
        </Suspense>
        <CodeBlock code={streamingCode} />
      </ExampleSection>

      <ExampleSection
        title="2. 캐시: use cache로 한 번만 불러오기"
        description="캐시된 결과는 기다림 없이 바로 표시되고, 몇 분 동안 같은 시각이 유지됩니다."
      >
        <CachedPosts />
        <CodeBlock code={cachedCode} />
      </ExampleSection>

      <ExampleSection
        title="3. 에러 처리: error.tsx"
        description="데이터를 불러오다 에러가 나면 같은 폴더의 error.tsx가 대신 표시됩니다."
      >
        <Suspense fallback={<Skeleton className="h-9 w-40" />}>
          <ErrorTrigger searchParams={searchParams} />
        </Suspense>
        <CodeBlock code={errorCode} />
      </ExampleSection>
    </>
  );
}

async function LatestPosts() {
  const { posts, fetchedAt } = await getLatestPosts();
  return <PostList posts={posts} fetchedAt={fetchedAt} label="요청 시점" />;
}

async function CachedPosts() {
  const { posts, fetchedAt } = await getCachedPosts();
  return <PostList posts={posts} fetchedAt={fetchedAt} label="캐시 시점" />;
}

// searchParams는 요청 시점에만 알 수 있는 값이라 Suspense 안에서 읽는다.
async function ErrorTrigger({
  searchParams,
}: {
  searchParams: PageProps<"/examples/data-fetching">["searchParams"];
}) {
  const { fail } = await searchParams;
  if (fail === "1") {
    throw new Error("데이터를 불러오지 못했습니다 (예제용 에러)");
  }
  return (
    <Link
      href="/examples/data-fetching?fail=1"
      className={buttonVariants({ variant: "destructive" })}
    >
      <TriangleAlert />
      에러 발생시키기
    </Link>
  );
}

function PostList({
  posts,
  fetchedAt,
  label,
}: {
  posts: Post[];
  fetchedAt: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border">
      <div className="flex items-center justify-between border-b px-4 py-2 text-sm">
        <span className="font-medium">게시글 {posts.length}개</span>
        <Badge variant="outline" className="font-mono">
          {label} {fetchedAt}
        </Badge>
      </div>
      <ul className="divide-y">
        {posts.map((post) => (
          <li key={post.id} className="flex justify-between px-4 py-3 text-sm">
            <span>{post.title}</span>
            <span className="text-muted-foreground">{post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostListSkeleton() {
  return (
    <div className="space-y-3 rounded-xl border p-4">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
