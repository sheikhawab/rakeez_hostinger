import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

export const FloatingLabelInput = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  multiline = false,
  rows = 4,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value.length > 0;

  const baseClasses = cn(
    'w-full px-4 pt-6 pb-2 text-secondary-900 bg-white border rounded-lg transition-all duration-200 outline-none',
    error
      ? 'border-red-500 focus:border-red-600'
      : 'border-secondary-300 focus:border-primary-500',
    multiline ? 'resize-none' : ''
  );

  const labelClasses = cn(
    'absolute left-4 transition-all duration-200 pointer-events-none text-secondary-500',
    isFloating
      ? 'top-2 text-xs'
      : 'top-1/2 -translate-y-1/2 text-base'
  );

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={rows}
          className={baseClasses}
          required={required}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={baseClasses}
          required={required}
        />
      )}
      <label className={labelClasses}>
        {label}
        {required && <span className="text-primary-500 ml-1">*</span>}
      </label>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};
