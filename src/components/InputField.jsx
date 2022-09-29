import React, { forwardRef } from "react";
export const InputField = forwardRef(
  (
    {
      name,
      type,
      label,
      placeholder,
      error,
      errorWording,
      isDisabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-row gap-x-5 items-center mb-5">
        <label htmlFor={name} className="font-semibold w-40">
          {label}
        </label>

        <div className="w-full">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            type={type}
            name={name}
            ref={ref}
            id={name}
            disabled={isDisabled}
            placeholder={placeholder}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              error && "border-red-500"
            }`}
          />
          {error && (
            <p className="text-xs ml-2 mt-2 text-nadi-error">
              {errorWording[error?.type]}
            </p>
          )}
        </div>
      </div>
    );
  }
);
