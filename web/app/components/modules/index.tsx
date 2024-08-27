"use client";
import React from "react";
import dynamic from "next/dynamic";
const ModuleTextUI = dynamic(() => import("./TextUI"), { ssr: false });
const ModuleHeroUI = dynamic(() => import("./HeroUI"), { ssr: false });
const ModuleContactsUI = dynamic(() => import("./ContactsUI"), {
  ssr: false,
});

import "./index.scss";

const Modules = ({ input }: any) => {
  // console.log(input);
  const _renderModules = () => {
    const _modules = input.map((module: any, i: number) => {
      // console.log(module._type);
      switch (module._type) {
        case "textUI":
          return <ModuleTextUI key={module._key} input={module} />;
        case "heroUI":
          return <ModuleHeroUI key={module._key} input={module} />;
        case "contactsUI":
          return <ModuleContactsUI key={module._key} input={module} />;

        default:
          return null;
      }
    });
    return _modules;
  };

  return <div className='modules'>{_renderModules()}</div>;
};

export default Modules;
