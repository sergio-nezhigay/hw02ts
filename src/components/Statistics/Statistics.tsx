import { StatisticItem } from "./StatisticItem/StatisticItem";
import { List } from "./Statistics.styled";

interface IStatistics {
  good: string;
  neutral: string;
  bad: string;
  total: string;
  positivePercentage: string;
}

export const Statistics: React.FC<IStatistics> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <StatisticItem key="Good" label="Good" value={good} />
      <StatisticItem key="Neutral" label="Neutral" value={neutral} />
      <StatisticItem key="Bad" label="Bad" value={bad} />
      <StatisticItem key="Total" label="Total" value={total} />
      <StatisticItem
        key="Positive feedback"
        label="Positive feedback"
        value={`${positivePercentage}%`}
      />
    </List>
  );
};
