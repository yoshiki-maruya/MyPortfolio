import SnackbarProvider from "@/providers/SnackbarProvider";
import "./globals.css";
import Container from "@/components/Container";
import Script from "next/script";
import GoogleAdsense from "@/components/molecules/GoogleAdsense";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAdsensePid = process.env.GOOGLE_ADSENSE_PID ?? "";
  console.log(googleAdsensePid)
  return (
    <html lang="ja">
      <SnackbarProvider>
        <Container>{children}</Container>
      </SnackbarProvider>
      <GoogleAdsense pid={googleAdsensePid}/>
    </html>
  );
}
