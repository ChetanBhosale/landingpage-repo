import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }) => {
  const { title, desc1, desc2, features, marketTrend, image, imageDark } =
    featureTab;
    

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-orange-500 dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5 text-blue-950">{desc1}</p>
          {desc2 && <p className="mb-5">{desc2}</p>}

          {/* Features List */}
          {features && (
            <ul className="mb-5 text-blue-950 list-disc pl-5">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Market Trend */}
          {marketTrend && (
            <div className="mt-5 p-4 bg-primary bg-opacity-10 rounded-lg">
              <p className="text-sm italic text-orange-500 dark:text-white">
                <span className="font-semibold">Market Trend:</span> {marketTrend}
              </p>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-lg object-cover dark:hidden"
          />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="rounded-lg object-cover hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;