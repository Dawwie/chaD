import { parseISO, formatDistance } from "date-fns";

export const formatDateDistnace = (date: string) => {
  const parsedDate = parseISO(date);
  return formatDistance(parsedDate, new Date(), { addSuffix: true });
};
