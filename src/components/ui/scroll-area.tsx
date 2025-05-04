import React from "react";

// ScrollArea component wraps content in a fixed-height scrollable container
export const ScrollArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-md p-2">
      {children}
    </div>
  );
};

// ScrollBar component — just a div with overflow-y
export const ScrollBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto max-h-64 pr-2">
      {children}
    </div>
  );
};

