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
      className={`font-mono rounded-lg overflow-hidden text-sm ${
        className || "bg-primary text-white"
      }`}
    >
      {(withTerminal || fileName) && (
        <div className="bg-primary text-white p-3 flex items-center">
          {withTerminal && (
            <div className="flex space-x-2 mr-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          )}
          {fileName && (
            <div className="text-sm font-mono ml-2 text-gray-300">
              {fileName}
            </div>
          )}
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="language-javascript">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
