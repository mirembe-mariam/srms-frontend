import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

const registerFn = async (registerData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await api.post("/api/auth/signup", registerData);
    const data = response.data;
    localStorage.setItem("token", data.jwt);
    localStorage.setItem("USER", JSON.stringify(data.user));
    return data;
 
};

export const useRegister = () => {
  return useMutation({ mutationFn: registerFn });
};



const resendVerificationEmailFn = async (email: string) => {
  const response = await api.post("/api/auth/resend-verification-email", { email });
  return response.data;
}
export const useResendVerificationEmail = () => {
  return useMutation({ mutationFn: resendVerificationEmailFn });
}