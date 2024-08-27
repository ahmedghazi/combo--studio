import React from "react";
import { ContactsUI, HeroUI, Landing, TextUI } from "../types/schema";
import Modules from "./modules";
import { SanityKeyed } from "sanity-codegen";

type Props = {
  modules?: Array<
    SanityKeyed<TextUI> | SanityKeyed<HeroUI> | SanityKeyed<ContactsUI>
  >;
};

const ContentModulaire = ({ modules }: Props) => {
  return (
    <div className='content content--modulaire'>
      {modules && <Modules input={modules} />}
    </div>
  );
};

export default ContentModulaire;
