import React, { Suspense } from "react";
import ResetPasswordClient from "@/components/ResetPasswordClient"; // Hum yeh nayi file banayenge
import Logo from "@/components/Logo"; // Maan lete hain aapke paas Logo component hai

// Yeh ek Server Component hai
const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Reset Your Password
          </h2>
          {/* FIX: Hum Suspense boundary ka istemal kar rahe hain.
            Jab tak client component load nahi hota, yeh fallback dikhayega.
          */}
          <Suspense fallback={<LoadingSpinner />}>
            <ResetPasswordClient />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

// Ek simple loading component
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default ResetPasswordPage;