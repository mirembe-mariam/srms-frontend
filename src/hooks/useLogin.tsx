import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

const loginFn = async (loginData: { email: string; password: string }) => {
  try {
    const response = await api.post("/api/auth/login", loginData);
    const data = response.data;
    localStorage.setItem("token", data.jwt);
    localStorage.setItem("USER", JSON.stringify(data.user));
    return data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Login failed";
    console.error("Login API error:", message);
    const customError = new Error(message);
    (customError as any).status = error?.response?.status;
    throw customError;
  }
};


export const useLogin = () => {
  return useMutation({ mutationFn: loginFn });
};

const verifyOtpFn = async ({ email, otp }: { email: string; otp: string }) => {
  const response = await api.post("/api/auth/verify-otp", { otp, email });
  return response.data;
}
export const useVerifyOtp = () => {
  return useMutation({ mutationFn: verifyOtpFn });
}

