'use client'
import React, { useState, useRef } from 'react'

const keywords = ["import", "public", "class", "static", "void", "return"];
const types = ["String", "int", "double", "boolean"];
const symbols = ["{", "}", "(", ")", "[", "]", ";"];

const highlightJavaSyntax = (code: string) => {
  const lines = code.split('\n');

  return lines.map((line, lineIndex) => {
    const words = line.split(/(\s+|(?=[{}();])|(?<=[{}();]))/g);

    const highlightedWords = words.map((word, i) => {
      if (keywords.includes(word)) return <span key={i} className="text-yellow-400">{word}</span>;
      if (types.includes(word)) return <span key={i} className="text-green-400">{word}</span>;
      if (symbols.includes(word)) return <span key={i} className="text-pink-400">{word}</span>;
      return <span key={i}>{word}</span>;
    });

    return (
      <div key={lineIndex} className="flex">
        <span className="text-gray-500 w-10 text-right pr-3 select-none">{lineIndex + 1}</span>
        <span>{highlightedWords}</span>
      </div>
    );
  });
};

const EditableTerminal = () => {
  const [code, setCode] = useState(`import java.util.*;

public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className="relative w-full h-full rounded-md mt-4 ml-4"
      style={{
        fontFamily: 'Source Code Pro, monospace',
        fontSize: '16px',
        lineHeight: '1',
      }}
    >
      {/* Syntax Highlight Layer */}
      <pre
        className="absolute w-full h-full bg-[#141723] text-white whitespace-pre-wrap overflow-auto pointer-events-none z-0 box-border"
        style={{
          fontFamily: 'Source Code Pro, monospace',
          fontSize: '16px',
          lineHeight: '1',
          padding: 0,
          margin: 0,
        }}
      >
        {highlightJavaSyntax(code)}
      </pre>

      {/* Transparent Textarea with Left Padding for Cursor */}
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="absolute w-full h-full bg-transparent text-transparent caret-white resize-none overflow-auto z-10 focus:outline-none box-border"
        spellCheck={false}
        style={{
          fontFamily: 'Source Code Pro, monospace',
          fontSize: '16px',
          lineHeight: '1',
          padding: '0px 0px 0px 40px', // left padding for cursor
          margin: 0,
        }}
      />
    </div>
  );
};

export default EditableTerminal;
