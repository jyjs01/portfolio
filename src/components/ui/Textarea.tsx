import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperRight?: string;
};

export default function Textarea({ label, helperRight, className = "", ...props }: Props) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        {label ? <span className="text-sm font-medium text-slate-700">{label}</span> : <span />}
        {helperRight ? <span className="text-xs text-slate-400">{helperRight}</span> : null}
      </div>
      <textarea
        className={
          "min-h-45 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none " +
          "placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 " +
          className
        }
        {...props}
      />
    </label>
  );
}
