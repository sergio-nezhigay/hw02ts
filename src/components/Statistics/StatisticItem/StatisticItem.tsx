import React from "react";

import { Label, Item } from "./StatisticItem.styled";

interface IStatisticalItem {
  label: string;
  value: string;
}

export const StatisticItem: React.FC<IStatisticalItem> = ({ label, value }) => (
  <Item>
    <Label>
      {label}: {value}
    </Label>
  </Item>
);
