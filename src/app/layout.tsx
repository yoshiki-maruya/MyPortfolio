import SnackbarProvider from "@/providers/SnackbarProvider";
import "./globals.css";
import Container from "@/components/Container";
import GoogleAdsense from "@/components/molecules/GoogleAdsense";
import GoogleAnalytics from "@/components/molecules/GoogleAnalytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAdsensePid = process.env.GOOGLE_ADSENSE_PID ?? "";
  const googleAnalyticsId = process.env.GA_ID ?? "";
  return (
    <html lang="ja">
      <SnackbarProvider>
        <Container>{children}</Container>
      </SnackbarProvider>
      <GoogleAdsense pid={googleAdsensePid}/>
      <GoogleAnalytics gaid={googleAnalyticsId} />
    </html>
  );
}
