import React from "react";

interface HomeBannerItemProps {
  title: string;
  subtitle?: string;
}

export default function HomeBannerItem({
  title,
  subtitle,
}: HomeBannerItemProps) {
  return (
    <div className="flex flex-col hover:text-[#00838F]">
      <h1 className="font-bold text-xl">{title}</h1>
      <h1 className="text-ellipsis overflow-hidden text-md">{subtitle}</h1>
    </div>
  );
}
