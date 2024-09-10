import { Figure, LocaleString, LocaleText } from "@/app/types/schema";
import React from "react";
import FigureUI from "./Figure";
import { _localizeField } from "@/app/utils/utils";

type Props = {
  image?: Figure;
  title?: LocaleString;
  excerpt?: LocaleString;
};

const Card = ({ image, title, excerpt }: Props) => {
  return (
    <article className="card">
      {image && <FigureUI asset={image.image} />}
      {title && <h3>{_localizeField(title)}</h3>}
      {excerpt && <p className="excerpt">{_localizeField(excerpt)}</p>}
    </article>
  );
};

export default Card;
