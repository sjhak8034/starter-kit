import { cacheLife } from "next/cache";
import { connection } from "next/server";

export type Post = {
  id: number;
  title: string;
  author: string;
};

const posts: Post[] = [
  { id: 1, title: "App Router로 레이아웃 나누기", author: "민지" },
  { id: 2, title: "Server Action으로 폼 처리하기", author: "준호" },
  { id: 3, title: "Tailwind v4 테마 토큰 정리", author: "서연" },
];

// 외부 API 대신 지연 응답을 흉내 낸다. 실제로는 fetch나 DB 쿼리가 들어갈 자리다.
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul" });
}

/** 요청마다 새로 불러오는 데이터. connection()으로 요청 시점까지 실행을 미룬다. */
export async function getLatestPosts() {
  await connection();
  await delay(1500);
  return { posts, fetchedAt: formatTime(new Date()) };
}

/** 'use cache'로 결과를 캐시하는 데이터. 정적 셸에 포함되어 즉시 표시된다. */
export async function getCachedPosts() {
  "use cache";
  cacheLife("minutes");
  await delay(1500);
  return { posts, fetchedAt: formatTime(new Date()) };
}
