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
  // Convert to string for proper rendering
  const codeText = children ? children.toString() : '';
  // Split into lines for line numbers
  const lines = codeText.split('\n');
  
  return (
    <div
      className={`font-mono rounded-lg overflow-hidden text-xs sm:text-sm ${
        className || "bg-[#1e1e2e] text-[#cdd6f4]"
      }`}
    >
      {(withTerminal || fileName) && (
        <div className="bg-[#181825] text-white p-2 sm:p-3 flex items-center justify-between border-b border-[#313244]">
          {withTerminal && (
            <div className="flex space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          )}
          {fileName && (
            <div className="text-xs sm:text-sm font-mono ml-1 sm:ml-2 text-[#a6adc8] truncate flex-1 text-center">
              {fileName}
            </div>
          )}
          {!fileName && <div className="flex-1"></div>}
          <div className="text-xs text-[#a6adc8] px-2 py-0.5 rounded bg-[#313244]">{language}</div>
        </div>
      )}
      <div className="p-3 sm:p-4 overflow-x-auto relative">
        {showLineNumbers && (
          <div className="absolute left-2 top-3 sm:top-4 text-[#6c7086] select-none">
            {lines.map((_, i) => (
              <div key={i} className="text-right pr-3">{i + 1}</div>
            ))}
          </div>
        )}
        
        <pre className={`${showLineNumbers ? 'pl-8' : ''} whitespace-pre text-[#cdd6f4]`}>
          <code>{codeText}</code>
        </pre>
      </div>
    </div>
  );
}
