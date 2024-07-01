import { useForm } from "react-hook-form";

import { useUser } from "@/contexts/UserProvider";

export const useLoginScreen = () => {
  const { setUser } = useUser();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    control,
    errors,
    isValid,
    reset,
    setUser,
    handleSubmit,
  };
};
