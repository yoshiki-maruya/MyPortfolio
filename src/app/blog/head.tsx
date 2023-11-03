import { NextSeo } from "next-seo";
import { SITE } from "../../config";

export default function Head() {
  return <NextSeo title={SITE.title} description={SITE.description} />;
}
