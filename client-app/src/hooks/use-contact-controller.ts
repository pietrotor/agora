import { ContactEntity } from "@/components";
import { useCreateContact } from "@/services/contacts";

const useContactController = () => {
  const createContactMutation = useCreateContact();

  const handleCreateContact = (
    contact: ContactEntity,
    calback?: () => void
  ) => {
    createContactMutation
      .mutateAsync(contact)
      .then(() => calback?.())
      .catch((error) =>
        console.log("🚀 ~ useContactController ~ error:", error)
      );
  };

  return {
    handleCreateContact,
    isLoading: createContactMutation.isPending,
  };
};

export { useContactController };
