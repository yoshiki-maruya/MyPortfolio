import Script from "next/script";

export type IGoogleAdsense = {
  pid: string;
}

const GoogleAdsense: React.FC<IGoogleAdsense> = ({ pid }) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
      crossOrigin="anonymous"
    />
  );
}

export default GoogleAdsense;