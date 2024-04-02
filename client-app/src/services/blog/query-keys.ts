import { TGetNews } from "./get-news";

const queryKeys = {
  all: (pagination: TGetNews) => ["news", { ...pagination }],
};
export { queryKeys };
