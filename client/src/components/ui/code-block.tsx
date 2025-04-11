import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  showLineNumbers?: boolean;
  language?: string;
  className?: string;
  withTerminal?: boolean;
  fileName?: string;
}

export function CodeBlock({
  children,
  showLineNumbers = false,
  language = "javascript",
  className = "",
  withTerminal = false,
  fileName,
}: CodeBlockProps) {
  return (
    <div
      className={`font-mono rounded-lg overflow-hidden text-xs sm:text-sm ${
        className || "bg-primary text-white"
      }`}
    >
      {(withTerminal || fileName) && (
        <div className="bg-primary text-white p-2 sm:p-3 flex items-center">
          {withTerminal && (
            <div className="flex space-x-1.5 sm:space-x-2 mr-1 sm:mr-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          )}
          {fileName && (
            <div className="text-xs sm:text-sm font-mono ml-1 sm:ml-2 text-gray-300 truncate">
              {fileName}
            </div>
          )}
        </div>
      )}
      <div className="p-3 sm:p-4 overflow-x-auto">
        <pre className="language-javascript whitespace-pre-wrap break-words sm:whitespace-pre sm:break-normal">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
