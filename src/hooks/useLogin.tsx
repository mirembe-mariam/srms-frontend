import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

const loginFn = async (loginData: { email: string; password: string }) => {
  const response = await api.post("/api/auth/login", loginData);
    const data = response.data;
    localStorage.setItem("token", data.jwt);
    localStorage.setItem("USER", JSON.stringify(data.user));
    return data;

};

export const useLogin = () => {
  return useMutation({ mutationFn: loginFn });
};



const resendVerificationEmailFn = async (email: string) => {
  const response = await api.post("/api/auth/resend-verification-email", { email });
  return response.data;
}
export const useResendVerificationEmail = () => {
  return useMutation({ mutationFn: resendVerificationEmailFn });
}