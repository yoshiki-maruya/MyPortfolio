import Script from "next/script";

export type IGoogleAnalytics = {
  gaid: string;
}

const GoogleAnalytics: React.FC<IGoogleAnalytics> = ({ gaid }) => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaid}`} />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaid}');
          `}
      </Script>
    </>
  );
}

export default GoogleAnalytics;