import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  showLineNumbers?: boolean;
  language?: string;
  className?: string;
  withTerminal?: boolean;
  fileName?: string;
}

// A better syntax highlighter using JSX and CSS classes
const highlightCode = (code: string): JSX.Element[] => {
  const lines = code.split('\n');
  
  return lines.map((line, index) => {
    // Replace keywords with styled spans
    let parts: JSX.Element[] = [];
    let currentPart = '';
    let currentIndex = 0;
    
    // Handle keywords
    const processKeywords = (text: string) => {
      const keywords = ['const', 'let', 'var', 'function', 'return', 'import', 'export', 
                        'from', 'if', 'else', 'for', 'while', 'class', 'extends', 'async', 'await'];
      
      for (const keyword of keywords) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        text = text.replace(regex, match => `___KEYWORD_START___${match}___KEYWORD_END___`);
      }
      
      // Handle comments
      text = text.replace(/(\/\/.*$)/g, '___COMMENT_START___$1___COMMENT_END___');
      
      // Handle strings
      text = text.replace(/(['"`])(.*?)(['"`])/g, '___STRING_START___$1$2$3___STRING_END___');
      
      // Handle numbers
      text = text.replace(/\b(\d+)\b/g, '___NUMBER_START___$1___NUMBER_END___');
      
      // Handle function calls
      text = text.replace(/(\w+)(\s*\()/g, '___FUNCTION_START___$1___FUNCTION_END___$2');
      
      return text;
    };
    
    const processedLine = processKeywords(line);
    const parts2 = processedLine.split(/(___\w+_START___|___\w+_END___)/g);
    
    let currentType = '';
    const result: JSX.Element[] = [];
    
    parts2.forEach((part, i) => {
      if (part.startsWith('___') && part.endsWith('_START___')) {
        currentType = part.slice(3, -9); // Extract the type name
      } else if (part.startsWith('___') && part.endsWith('_END___')) {
        currentType = '';
      } else if (part) {
        if (currentType) {
          result.push(<span key={`${index}-${i}`} className={`code-${currentType.toLowerCase()}`}>{part}</span>);
        } else {
          result.push(<span key={`${index}-${i}`}>{part}</span>);
        }
      }
    });
    
    return <div key={index}>{result}</div>;
  });
};

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
        className || "bg-neutral-50 text-neutral-800 border border-neutral-200"
      }`}
    >
      {(withTerminal || fileName) && (
        <div className="bg-neutral-100 text-neutral-700 p-2 sm:p-3 flex items-center justify-between border-b border-neutral-200">
          {withTerminal && (
            <div className="flex space-x-1.5 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          )}
          {fileName && (
            <div className="text-xs sm:text-sm font-mono ml-1 sm:ml-2 text-neutral-600 truncate flex-1 text-center">
              {fileName}
            </div>
          )}
          {!fileName && <div className="flex-1"></div>}
          <div className="text-xs text-neutral-600 px-2 py-0.5 rounded bg-neutral-200">{language}</div>
        </div>
      )}
      <div className="p-3 sm:p-4 overflow-x-auto relative">
        {showLineNumbers && (
          <div className="absolute left-2 top-3 sm:top-4 text-neutral-400 select-none">
            {lines.map((_, i) => (
              <div key={i} className="text-right pr-3">{i + 1}</div>
            ))}
          </div>
        )}
        
        <pre className={`${showLineNumbers ? 'pl-8' : ''} whitespace-pre text-neutral-800`}>
          <code>
            {language === 'javascript' || language === 'js' || language === 'jsx' || language === 'ts' || language === 'tsx' 
              ? highlightCode(codeText)
              : codeText
            }
          </code>
        </pre>
      </div>
    </div>
  );
}
