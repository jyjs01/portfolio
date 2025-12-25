import React from "react";

type Variant = "solid" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  leftIcon?: React.ReactNode;
};

export default function Button({
  variant = "solid",
  leftIcon,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition " +
    "cursor-pointer " +
    "focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60";

  const solid =
    "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800";
  const outline =
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100";

  return (
    <button
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon}
      {children}
    </button>
  );
}
