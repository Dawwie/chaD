import { useForm } from "react-hook-form";

export const useSignUpScreen = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  return {
    control,
    isValid,
    errors,
    reset,
    handleSubmit,
  };
};
