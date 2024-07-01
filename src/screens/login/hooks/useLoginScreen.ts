import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import { LOGIN_USER } from "@/api/queries/auth";
import { LoginUserPayload } from "@/api/types/auth";
import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/contexts/UserProvider";

export const useLoginScreen = () => {
  const { setUser } = useUser();
  const { setAuth } = useAuth();
  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const onSubmit = async (loginData: LoginUserPayload) => {
    try {
      const response = await loginUser({
        variables: loginData,
      });
      if (response.data) {
        setUser(response.data.loginUser.user);
        setAuth(response.data.loginUser.token);
      }
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
      password: "",
    },
  });

  return {
    control,
    errors,
    isValid,
    isPending: loading,
    reset,
    setUser,
    handleSubmit,
    onSubmit,
  };
};
