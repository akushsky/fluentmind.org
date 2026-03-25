import { useState } from "react";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  error,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`peer w-full rounded-lg border-2 bg-white px-3.5 pb-2 pt-5 text-sm outline-none transition-colors ${
          error
            ? "border-red-400 focus:border-red-500"
            : focused
              ? "border-accent"
              : "border-slate-200"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute start-3.5 transition-all duration-200 pointer-events-none ${
          isActive
            ? "top-1 text-[10px] font-medium text-accent"
            : "top-3.5 text-sm text-slate-400"
        }`}
      >
        {label}
        {required && " *"}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
