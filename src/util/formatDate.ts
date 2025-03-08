import dayjs from "dayjs";

export const formatDate = (date: string) => {
  return dayjs(date).locale("es").format("D [de] MMMM [de] YYYY");
};
