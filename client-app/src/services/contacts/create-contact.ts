import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "./query-keys";
import agora2030 from "@/lib/axiosConfig";
import { ContactEntity } from "@/components";

export const sendContact = async (body: ContactEntity): Promise<unknown> => {
  return agora2030.post("/contacts", body).then(({ data }) => data);
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    onError(error) {
      console.log("🚀 ~ onError ~ error:", error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all() });
    },
    mutationFn: sendContact,
  });
};
