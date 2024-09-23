"use client";
import React from "react";
import RFMarquee from "react-fast-marquee";
import styled from "styled-components";

const Container = styled.section`
  min-height: unset;
  .item {
    padding: 0.4em 1em 0.5em;
  }
`;

type Props = {
  text: string;
  backgroundColor: string;
  foregroundColor: string;
};

const Marquee = ({ text, backgroundColor, foregroundColor }: Props) => {
  return (
    <Container
      className="module-marquee  "
      style={{
        background: backgroundColor,
        color: foregroundColor,
      }}
    >
      <RFMarquee gradient={false} speed={100} play={true} className="">
        {new Array(20).fill(0).map((v, i) => (
          <div key={i} className="item px-05e">
            {text}
          </div>
        ))}
      </RFMarquee>
    </Container>
  );
};

export default Marquee;
