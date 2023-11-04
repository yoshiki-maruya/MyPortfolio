"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { ReactNode } from "react";

export type IWorksCard = {
  title: string;
  imagePath: string;
  alt: string;
  children: ReactNode;
};

const WorksCard: React.FC<IWorksCard> = ({ title, imagePath, alt, children }) => {
  const isMobile = useMediaQuery(450);
  return (
    <div
      className={`grid ${
        isMobile ? "grid-cols-3" : "grid-rows-2"
      } my-8 gap-3 rounded-md bg-slate-200 px-4 py-4`}
    >
      <div className="relative w-full">
        <Image className="rounded-lg border-4" src={imagePath} alt={alt} fill />
      </div>
      <div className={`${isMobile ? "col-span-2" : ""}`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="break-all text-lg">{children}</p>
      </div>
    </div>
  );
};

export default WorksCard;
