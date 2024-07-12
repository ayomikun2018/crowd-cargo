"use client";
import { forwardRef, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = forwardRef(({ className, label, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const disabled = false;
  // const disabled = props.value === "" || props.value === undefined || props.disabled
  return (
    <div className="relative">
      <Input
        id={label}
        type={showPassword ? "text" : "password"}
        className={cn(
          "hide-password-toggle pr-10 peer h-14 pt-4 bg-transparent",
          className,
          !label && "pt-0 py-1"
        )}
        ref={ref}
        // pattern="[.*]"
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
      <label
        htmlFor={label}
        className={cn(
          "absolute text-sm left-3 top-5 peer-invalid:text-[10px] peer-invalid:top-1 transition-all cursor-text peer-invalid:text-muted-foreground peer-focus:text-muted-foreground peer-focus:text-[10px] peer-focus:top-1"
        )}
      >
        {label}
      </label>
      {/* hides browsers password toggles */}
      <style>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";
export { PasswordInput };
