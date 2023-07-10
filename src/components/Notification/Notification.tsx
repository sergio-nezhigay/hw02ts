import React from "react";

import { Text } from "./Notification.styled";

interface INotification {
  message: string;
}

export const Notification: React.FC<INotification> = ({ message }) => {
  return <Text>{message}</Text>;
};
