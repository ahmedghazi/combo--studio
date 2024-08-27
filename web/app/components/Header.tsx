import React from "react";
import { Settings } from "../types/schema";
import Image from "next/image";
import { urlFor } from "../utils/sanity-utils";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const logo = settings.comboStudioLogo;
  return (
    <header>
      <div className='flex justify-center'>
        <div className='logo'>
          {logo && (
            <Image
              src={urlFor(logo?.asset, 188)}
              width={logo.asset?.metadata?.dimensions.width || 188}
              height={logo.asset?.metadata?.dimensions.height || 188}
              alt={"Combo Studio Logo"}
              sizes='100vw'
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: `${logo.asset?.metadata?.dimensions.width} / ${logo.asset?.metadata?.dimensions.height}`,
                // objectFit: "cover",
              }}
              blurDataURL={logo.asset?.metadata?.lqip}
              // placeholder='blur'
              // placeholder={logo.asset?.metadata?.lqip}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
