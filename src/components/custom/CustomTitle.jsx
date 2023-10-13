import React from "react";

const CustomTitle = ({ children, className }) => {
  return (
    <>
      <h1 className={`font-extrabold leading-none tracking-tight text-gray-900  dark:text-white ${className}`}>
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          {/* world’s potential title */}
          {children}
        </span>
      </h1>
    </>
  );
};

export default CustomTitle;
