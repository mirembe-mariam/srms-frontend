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



const googleAuthFn = async (googleData: { idToken: string }) => {
  const response = await api.post("/auth/google", { 
    credential: googleData.idToken 
  });

  const data = response.data;
  console.log("Google Auth Response:", data);
  localStorage.setItem("token", data.accessToken); 
  localStorage.setItem("USER", JSON.stringify(data.user));
  return data;
};

export const useGoogleAuth = () => {
  return useMutation({
    mutationFn: googleAuthFn });
};

const githubAuthFn = async (githubData: { code: string }) => {
  const response = await api.post("/auth/github", { 
    code: githubData.code 
  });

  const data = response.data;
  console.log("Github Auth Response:", data);
  localStorage.setItem("token", data.accessToken); 
  localStorage.setItem("USER", JSON.stringify(data.user));
  return data;
}

export const useGithubAuth = () => {
  return useMutation({
    mutationFn: githubAuthFn });
}