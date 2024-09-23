"use client";
import React, { useEffect } from "react";
import RFMarquee from "react-fast-marquee";
import { publish } from "pubsub-js";

type Props = {
  text: string;
  backgroundColor: string;
  foregroundColor: string;
};

const Marquee = ({ text, backgroundColor, foregroundColor }: Props) => {
  return (
    <div
      className="marquee"
      style={{
        background: backgroundColor,
        color: foregroundColor,
      }}
    >
      <RFMarquee gradient={false} speed={100} play={true} className="">
        {new Array(20).fill(0).map((v, i) => (
          <div key={i} className="item">
            {text}
          </div>
        ))}
      </RFMarquee>
    </div>
  );
};

export default Marquee;
