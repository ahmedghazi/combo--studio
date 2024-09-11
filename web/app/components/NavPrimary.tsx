"use client";
import React from "react";
import { MenuItem, SanityKeyed } from "../types/schema";
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
  input: Array<SanityKeyed<MenuItem>>;
};
const NavPrimary = ({ input }: Props) => {
  return (
    <nav>
      <ul className="menu flex justify-center">
        {input.map((item, i) => (
          <li key={i}>
            {/* <Link href={_linkResolver(item.link?.link)}>
              {_localizeField(item.link?.label)}
            </Link> */}
            <NavLink
              href={_linkResolver(item.link?.link)}
              name={_localizeField(item.link?.label)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPrimary;
