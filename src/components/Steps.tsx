"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  href: string;
}

export function Steps({ steps }: { steps: Step[] }) {
  const pathname = usePathname();

  const currentStepIndex = steps.findIndex((step) => step.href === pathname);

  return (
    <div className="relative">
      <div
        className="absolute top-5 left-6 w-[calc(100%-48px)] h-0.5 bg-purple-500/20"
        aria-hidden="true"
      />
      <div
        className="absolute top-5 left-6 h-0.5 bg-purple-500 transition-all duration-500"
        style={{
          width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
        }}
        aria-hidden="true"
      />

      <nav aria-label="Progress">
        <ol className="relative flex items-center justify-between w-full">
          {steps.map((step, stepIdx) => {
            const isActive = stepIdx === currentStepIndex;
            const isCompleted = stepIdx < currentStepIndex;

            return (
              <li
                key={step.title}
                className="relative flex flex-col items-center"
              >
                <Link
                  href={isCompleted ? step.href : "#"}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-200",
                    isActive
                      ? "border-purple-500 bg-purple-500/20"
                      : isCompleted
                      ? "border-purple-500 bg-purple-500"
                      : "border-purple-500/20 bg-[#130627]"
                  )}
                >
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      isActive
                        ? "text-purple-500"
                        : isCompleted
                        ? "text-white"
                        : "text-purple-500/40"
                    )}
                  >
                    {stepIdx + 1}
                  </span>
                </Link>

                <div className="mt-4 text-center">
                  <div
                    className={cn(
                      "text-sm font-medium",
                      isActive || isCompleted
                        ? "text-gray-200"
                        : "text-gray-400"
                    )}
                  >
                    {step.title}
                  </div>
                  <div
                    className={cn(
                      "text-xs",
                      isActive || isCompleted
                        ? "text-gray-400"
                        : "text-gray-500"
                    )}
                  >
                    {step.description}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
