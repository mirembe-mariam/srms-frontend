import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useResendVerificationEmail } from "../../hooks/useRegister";
import { message } from "antd";

const EmailVerified = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const {mutate: resendEmail, isPending, isError} = useResendVerificationEmail();

  const emailMessage = params.get("message");
  const error = params.get("error");

  const [email, setEmail] = useState("");

  const handleResend = () => {
    if (!email) {
      message.error("Please enter your email address.");
      return;
    }

    resendEmail(
      email,
      {
        onSuccess: (data) => {
          message.success(data.message);
          setEmail("");
        },
        onError: (error) => {
          console.error("Error resending verification email:", error);
          message.error("Failed to resend verification email. Please try again.");
        },
      }
    );
  }

  return (
    <div className="tailwind">
    <div className="flex items-center justify-center min-h-screen bg-gray-300 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        {error ? (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-red-600">
              Email Verification Failed
            </h2>
            <p className="text-gray-600 mb-6">{error}</p>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded mb-2"
              />
              <button
                onClick={handleResend}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full"
                disabled={isPending}
              >
                {isPending ? "Sending..." : "Resend Verification Email"}
              </button>
              {isError && <p className="text-red-600 mt-2">{isError}</p>}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Not redirected?
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login manually
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            {emailMessage}     
             </h2>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 mt-5 rounded transition duration-300 w-full"
            >
              Go to Login
            </button>
           
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default EmailVerified;
