import { get, useForm } from "react-hook-form";
import { ContactEntity } from "../ContactForm.types";
import { useEffect, useState } from "react";

const useContactFormState = () => {
  const [succesMesage, setSuccesMesage] = useState(false);
  const form = useForm<ContactEntity>({
    mode: "all",
  });

  useEffect(() => {
    if (succesMesage) {
      setTimeout(() => {
        setSuccesMesage(false);
      }, 3000);
    }
  }, [succesMesage]);

  const getInputError = (name: string) => {
    return get(form.formState.errors, name);
  };

  return {
    form,
    getInputError,
    succesMesage,
    setSuccesMesage,
  };
};

export { useContactFormState };
