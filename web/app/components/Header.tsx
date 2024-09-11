import React from "react";
import { Settings } from "../types/schema";
import Image from "next/image";
import { urlFor } from "../utils/sanity-utils";
import NavPrimary from "./NavPrimary";
import Link from "next/link";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const logo = settings.comboStudioLogo;
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="logo logo--combo">
          <Link href={"/"}>
            <Image
              src={"/logo-combo.svg"}
              width={163}
              height={46}
              alt={"Combo Studio Logo"}
              sizes="100vw"
            />
          </Link>
        </div>
        <div className="flex-2">
          {settings.navPrimary && <NavPrimary input={settings.navPrimary} />}
        </div>

        <div className="logo logo--studio">
          <Image
            src={"/logo-studio.svg"}
            width={163}
            height={46}
            alt={"Combo Studio Logo"}
            sizes="100vw"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
