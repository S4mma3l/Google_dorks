// src/DorksGuide.jsx - VERSIÓN RESTAURADA
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Importamos la hoja de estilos que también restauraremos.
import './DorksGuide.css';

const DorksGuide = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // La lógica de carga del archivo sigue siendo la misma.
    fetch('/GUIA_DORKS.md')
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="dorks-container">
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default DorksGuide;