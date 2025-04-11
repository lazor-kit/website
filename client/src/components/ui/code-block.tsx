import { ReactNode, useEffect, useRef } from "react";

interface CodeBlockProps {
  children: ReactNode;
  showLineNumbers?: boolean;
  language?: string;
  className?: string;
  withTerminal?: boolean;
  fileName?: string;
}

// Simple syntax highlighting function
const highlightCode = (code: string): string => {
  // Replace specific patterns with styled spans
  return code
    // Keywords
    .replace(
      /\b(const|let|var|function|return|import|export|from|if|else|for|while|switch|case|break|continue|class|extends|new|this|async|await|try|catch|throw|typeof|instanceof)\b/g,
      '<span class="text-purple-500">$1</span>'
    )
    // Comments
    .replace(
      /(\/\/.*$)/gm,
      '<span class="text-neutral-400">$1</span>'
    )
    // Strings
    .replace(
      /(['"`])(.*?)(['"`])/g,
      '<span class="text-green-500">$1$2$3</span>'
    )
    // Numbers
    .replace(
      /\b(\d+)\b/g,
      '<span class="text-blue-400">$1</span>'
    )
    // Function calls
    .replace(
      /(\w+)(\s*\()/g,
      '<span class="text-yellow-500">$1</span>$2'
    )
    // Object properties
    .replace(
      /(\.\w+)/g,
      '<span class="text-cyan-400">$1</span>'
    )
    // Brackets
    .replace(
      /([{}[\]()])/g,
      '<span class="text-neutral-300">$1</span>'
    );
};

export function CodeBlock({
  children,
  showLineNumbers = false,
  language = "javascript",
  className = "",
  withTerminal = false,
  fileName,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  
  useEffect(() => {
    if (codeRef.current && typeof children === 'string') {
      codeRef.current.innerHTML = highlightCode(children);
    }
  }, [children]);

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
            {Array.from({ length: (children?.toString().split('\n').length || 1) }).map((_, i) => (
              <div key={i} className="text-right pr-3">{i + 1}</div>
            ))}
          </div>
        )}
        
        <pre 
          ref={codeRef}
          className={`language-${language} ${showLineNumbers ? 'pl-8' : ''} whitespace-pre text-[#cdd6f4]`}
        >
          {typeof children !== 'string' ? children : null}
        </pre>
      </div>
    </div>
  );
}
