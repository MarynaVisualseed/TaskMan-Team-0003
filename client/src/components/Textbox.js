import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ label, type, name, register, error, className, placeholder }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label className="block text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        <div>
          <input
            ref={ref}
            type={type}
            name={name}
            placeholder={placeholder}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent px-3 py-3 2xl:py-3 border placeholder-gray-400 text-gray-800 outline-none text-base focus:ring-2",
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300",
              className
            )}
          />
        </div>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    );
  }
);

export default Textbox;
