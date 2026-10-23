"use server";

import { z } from "zod";

const contactSchema = z.object({
  // TODO(human): 각 필드의 검증 규칙과 한국어 에러 메시지를 정의하세요.
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

type ContactFields = z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof ContactFields, string[]>>;
  // 검증에 실패해도 입력값을 유지하려고 되돌려준다 (React 19는 제출 후 폼을 초기화한다).
  values?: Partial<ContactFields>;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = contactSchema.safeParse(values);
  if (!result.success) {
    return {
      status: "error",
      message: "입력값을 확인해 주세요.",
      errors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  // 실제 서비스라면 여기서 DB 저장이나 메일 발송을 한다. 예제에서는 지연만 흉내 낸다.
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    status: "success",
    message: `${result.data.name}님, 문의가 접수되었습니다.`,
  };
}
