import Image from "next/image";
import React from "react";
import { Button, HomeBannerItem } from ".";

const homeBannerItems = [
  {
    title: "Business Solution",
    subtitle: "Interdum et malesuada ac antejfen ewfh ushef wfeh.",
  },
  {
    title: "Free project quote",
    subtitle:
      "Interdum et malesuada ac ant wfuwh fwue fiu fIWEFIYAGYG WG OWIUG ",
  },
  {
    title: "Nulla lobortis nunc",
    subtitle: "Interdum et malesuada ac antesi ghieruh wuoirgweurhg woerhg que",
  },
];

export default function HomeBanner() {
  return (
    <div>
      <div className="relative -z-10">
        <div className="absolute -top-28 bg-[#B2EBF2]/60 w-full h-[980px] md:h-[690px] lg:h-[720px] xl:h-[740px] rounded-3xl"></div>
      </div>
      <div className="px-6 md:px-20">
        <div className=" pt-12 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-8 lg:gap-14">
            <h1 className="text-3xl font-bold">Lorem ipsum dolor amet</h1>
            <h1 className="text-xl text-gray-500 font-bold">
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum
              lobortis.
            </h1>

            <div className="flex flex-row gap-5 items-center ">
              <Button
                label="More Info"
                type="button"
                buttonStyle="uppercase font-bold text-[#00838F] hover:text-[#00838F]/70"
              />
              <Button
                label="See details"
                type="button"
                buttonStyle="uppercase font-bold text-white"
                containerStyle="rounded-md bg-[#00BCD4] px-8 py-2 hover:bg-[#00BCD4]/70"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/banner.png"
              alt="banner"
              width={800}
              height={366}
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-around items-start gap-5">
          {homeBannerItems.map((i, index) => (
            <HomeBannerItem key={index} title={i.title} subtitle={i.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
}
