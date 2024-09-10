import { MarqueeUI } from "@/app/types/schema";
import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
// import { SanityModuleMarquee } from "../../../graphql-types";

const Container = styled.section`
  min-height: unset;
  .item {
    padding: 0.5em 1em 0.3em;
    /* padding: 0 0.2em; */
    /* line-height: 1.2; */
    /* padding-top: 0.05em; */
    /* padding-bottom: 0.1em; */
  }
`;

type MarqueeProps = {
  input: MarqueeUI;
};

const ModuleMarqueeUI = ({ input }: MarqueeProps): JSX.Element => {
  // console.log(input);
  return (
    <Container
      className="module-marquee  "
      style={{
        background: input.backgroundColor,
        color: input.foregroundColor,
      }}
    >
      <Marquee gradient={false} speed={100} play={true} className="">
        {new Array(20).fill(0).map((v, i) => (
          <div key={i} className="item px-05e py-sm-">
            {input.text}
          </div>
        ))}
      </Marquee>
    </Container>
  );
};

export default ModuleMarqueeUI;
