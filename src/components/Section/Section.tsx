import React from "react";
import { Title } from "./Section.styled";

interface ISection {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISection> = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};
