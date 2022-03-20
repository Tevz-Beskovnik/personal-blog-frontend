// SyntaxHighlight.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneSea } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const SyntaxHighlight: object = {
  
  code({node, inline, className,...props}: {node: any, inline: any, className: string}) {
   // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={duotoneSea}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    )
  }
}

export default SyntaxHighlight as object