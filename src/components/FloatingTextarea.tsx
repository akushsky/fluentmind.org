import { useState } from "react";

interface FloatingTextareaProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export default function FloatingTextarea({
  id,
  label,
  required = false,
  value,
  onChange,
  rows = 3,
}: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className={`peer w-full resize-none rounded-lg border-2 bg-white px-3.5 pb-2 pt-5 text-sm outline-none transition-colors ${
          focused ? "border-accent" : "border-slate-200"
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
      </label>
    </div>
  );
}
