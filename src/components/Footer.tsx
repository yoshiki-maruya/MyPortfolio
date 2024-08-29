import { createUrl } from "@/utils/url";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl border-t-2 pt-2 my-5 flex justify-between">
      <div className="flex justify-start">
        <small className="ml-2">&copy; 2023 maruyaki</small>
        <small className="ml-4">
          <Link className="hover:border-b border-b-black" href="/privacy-policy">
            プライバシーポリシー
          </Link>
        </small>
      </div>
      <div className="flex justify-end gap-4 mr-2">
        <Link href="https://www.linkedin.com/in/%E6%85%B6%E8%B2%B4-%E4%B8%B8%E8%B0%B7-33b130226/" target="_blank">
          <Image src="/linkedin.svg" alt="" width="25" height="25" />
        </Link>
        <Link href="https://github.com/yoshiki-maruya" target="_blank">
          <Image src="/github.svg" alt="" width="25" height="25" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;