import SnackbarProvider from "@/providers/SnackbarProvider";
import "./globals.css";
import Container from "@/components/Container";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <SnackbarProvider>
        <Container>{children}</Container>
      </SnackbarProvider>
    </html>
  );
}
