import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { REGISTER_USER } from "@/api/queries/auth";
import { RegisterUserPayload } from "@/api/types/auth";
import { SignUpScreenNavigationProp } from "@/navigation/types";

export const useSignUpScreen = () => {
  const [registerUser, { loading }] = useMutation(REGISTER_USER);
  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  const onSubmit = async (registerData: RegisterUserPayload) => {
    try {
      await registerUser({
        variables: registerData,
      });
      navigate("LOGIN");
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };
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
    isPending: loading,
    handleSubmit,
    onSubmit,
  };
};
