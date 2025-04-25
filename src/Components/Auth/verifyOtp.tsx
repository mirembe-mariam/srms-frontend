import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useVerifyOtp } from "../../hooks/useLogin";
import { message } from "antd";

const VerifyOtpPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const email = params.get("email") || "";

  const [otp, setOtp] = useState("");

  const { mutate: verifyMutation, isPending } = useVerifyOtp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyMutation(
      { email, otp },
      {
        onSuccess: (data: any) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("USER", JSON.stringify(data.user));
          message.success("Logged in!");
          setOtp("");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        },
        onError: (err: any) => {
          toast.error(err?.response?.data?.message || "Invalid OTP");
        },
      }
    );
  };

  return (
    <div className="tailwind">
      <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4 ">
        <div className="max-w-md mx-auto mt-20">
          <h2 className="text-xl font-bold mb-4">Enter your OTP</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="border p-2 w-full mb-3"
            />
            <button
              disabled={isPending}
              className={`w-full  px-4 py-3 bg-[#0a2e58]  text-white rounded cursor-pointer transition-colors duration-300  disabled:bg-[#cccccc]    disabled:text-[#666666]    disabled:cursor-not-allowed    disabled:opacity-70    disabled:shadow-none `}
              type="submit">
              {isPending ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
