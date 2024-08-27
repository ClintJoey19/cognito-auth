import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="max-w-md w-full space-y-8 p-6 bg-white shadow rounded-md"
        action="/api/auth/google-sign-in"
        method="GET"
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in with your Google account.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            type="submit"
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
