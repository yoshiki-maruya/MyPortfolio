import "./globals.css";
import Container from "@/components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Container>{children}</Container>
    </html>
  );
}
