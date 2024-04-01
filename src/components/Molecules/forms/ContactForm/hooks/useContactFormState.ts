import { get, useForm } from "react-hook-form";
import { ContactEntity } from "../ContactForm.types";

const useContactFormState = () => {
  const form = useForm<ContactEntity>({
    mode: "all",
  });

  const getInputError = (name: string) => {
    return get(form.formState.errors, name);
  };

  return {
    form,
    getInputError,
  };
};

export { useContactFormState };
