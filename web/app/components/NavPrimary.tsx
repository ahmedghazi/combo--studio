"use client";
import React from "react";
import { MenuItem, SanityKeyed } from "../types/schema";
import Link from "next/link";
import { _linkResolver, _localizeField, _localizeText } from "../utils/utils";

type Props = {
  input: Array<SanityKeyed<MenuItem>>;
};

const NavPrimary = ({ input }: Props) => {
  return (
    <nav>
      <ul className="menu flex justify-center">
        {input.map((item, i) => (
          <li key={i}>
            <Link href={_linkResolver(item.link?.link)}>
              {_localizeField(item.link?.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPrimary;
