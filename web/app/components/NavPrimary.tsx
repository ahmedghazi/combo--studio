"use client";
import React from "react";
import {
  KeyVal,
  LinkExternal,
  LinkInternal,
  MenuItem,
  SanityKeyed,
} from "../types/schema";
import Link from "next/link";
import { _linkResolver, _localizeField, _localizeText } from "../utils/utils";
import { usePathname, useRouter } from "next/navigation";

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = ({ href, name }: NavLinkProps) => {
  // const { asPath } = useRouter();
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <Link href={href} aria-current={ariaCurrent}>
      {name}
    </Link>
  );
};

type Props = {
  input: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;
};
const NavPrimary = ({ input }: Props) => {
  return (
    <nav>
      <ul className="menu flex justify-center">
        {input.map((item, i) => (
          <li key={i}>
            <NavLink
              href={_linkResolver(item.link)}
              name={_localizeField(item.label)}
            />
            {item._type === "linkInternal" &&
              item.link?._type === "pageModulaire" &&
              item.link.subMenu &&
              item.link.subMenu.length > 0 && (
                <ul className="sub-menu">
                  {item.link.subMenu.map((subItem: KeyVal, j) => (
                    <li key={j}>
                      <Link href={`${_linkResolver(item.link)}#${subItem.val}`}>
                        {_localizeField(subItem.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPrimary;
