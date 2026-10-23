import { Container } from "@/components/layout/container";

export default function ExamplesLayout({
  children,
}: LayoutProps<"/examples">) {
  return <Container className="py-18">{children}</Container>;
}
