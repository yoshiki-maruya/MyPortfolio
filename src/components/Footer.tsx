import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 mt-5 mb-2 pt-2 flex justify-between">
      <small>&copy; 2023 maruyaki</small>
      <div className="flex justify-end gap-4">
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