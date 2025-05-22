"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatusPillProps {
  status: "completed" | "processing" | "failed" | "active" | "inactive" | "pending" | string;
  className?: string;
  children?: ReactNode;
}

export function StatusPill({ status, className, children }: StatusPillProps) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500 text-white";
      case "processing":
        return "bg-blue-500 text-white";
      case "failed":
        return "bg-red-500 text-white";
      case "active":
        return "bg-osaz-cyan text-white";
      case "inactive":
        return "bg-osaz-red text-white";
      case "pending":
        return "bg-osaz-orange text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        getStatusStyles(),
        className
      )}
    >
      {children || status}
    </span>
  );
}