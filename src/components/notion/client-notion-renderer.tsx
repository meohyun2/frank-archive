"use client";

import Image from "next/image";
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { ExtendedRecordMap } from "notion-types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "react-notion-x/src/styles.css";

const ClientNotionRenderer = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="notion-glass-wrapper">
      <NotionRenderer
        recordMap={recordMap}
        components={{
          nextImage: Image,
          Code: Code,
          Collection: Collection,
        }}
        fullPage={true}
        darkMode={isDark}
        disableHeader
      />
      <style jsx global>{`
        .notion-glass-wrapper {
          --bg-color: transparent;
        }
        
        /* Dark mode styles */
        .dark .notion-glass-wrapper {
          --fg-color: #f0f0f0;
          --fg-color-0: rgba(240, 240, 240, 1);
          --fg-color-1: rgba(240, 240, 240, 0.9);
          --fg-color-2: rgba(240, 240, 240, 0.8);
          --fg-color-3: rgba(240, 240, 240, 0.7);
          --fg-color-4: rgba(240, 240, 240, 0.6);
          --fg-color-5: rgba(240, 240, 240, 0.5);
          --fg-color-6: rgba(240, 240, 240, 0.4);
        }
        
        /* Light mode styles */
        .notion-glass-wrapper:not(.dark *) {
          --fg-color: #1a1a2e;
          --fg-color-0: rgba(26, 26, 46, 1);
          --fg-color-1: rgba(26, 26, 46, 0.9);
          --fg-color-2: rgba(26, 26, 46, 0.8);
          --fg-color-3: rgba(26, 26, 46, 0.7);
          --fg-color-4: rgba(26, 26, 46, 0.6);
          --fg-color-5: rgba(26, 26, 46, 0.5);
          --fg-color-6: rgba(26, 26, 46, 0.4);
        }
        
        .notion-glass-wrapper .notion {
          background: transparent;
        }
        
        .notion-glass-wrapper .notion-page {
          padding: 2rem;
        }
        
        /* 노션 페이지 너비 확장 */
        .notion-glass-wrapper .notion-page-content {
          max-width: 100%;
          padding: 0;
        }
        
        .notion-glass-wrapper .notion-page-content-inner {
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          /* padding: 0 1rem; */
        }
        
        .notion-glass-wrapper .notion-full-width {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-page-content .notion-collection-page-properties {
          max-width: 100%;
        }
        
        /* 모든 블록 요소 너비 확장 */
        .notion-glass-wrapper .notion-block {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-row {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-column {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-text,
        .notion-glass-wrapper .notion-h1,
        .notion-glass-wrapper .notion-h2,
        .notion-glass-wrapper .notion-h3,
        .notion-glass-wrapper .notion-bulleted-list,
        .notion-glass-wrapper .notion-numbered-list,
        .notion-glass-wrapper .notion-to-do,
        .notion-glass-wrapper .notion-toggle {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-asset-wrapper {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-image {
          max-width: 100%;
        }
        
        .notion-glass-wrapper .notion-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .dark .notion-glass-wrapper .notion-h1,
        .dark .notion-glass-wrapper .notion-h2,
        .dark .notion-glass-wrapper .notion-h3 {
          color: #f0f0f0;
        }
        
        .notion-glass-wrapper .notion-h1,
        .notion-glass-wrapper .notion-h2,
        .notion-glass-wrapper .notion-h3 {
          color: #1a1a2e;
        }
        
        .dark .notion-glass-wrapper .notion-h1,
        .dark .notion-glass-wrapper .notion-h2,
        .dark .notion-glass-wrapper .notion-h3 {
          color: #f0f0f0;
        }
        
        .notion-glass-wrapper .notion-text {
          color: rgba(26, 26, 46, 0.85);
        }
        
        .dark .notion-glass-wrapper .notion-text {
          color: rgba(240, 240, 240, 0.85);
        }
        
        .notion-glass-wrapper .notion-code {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }
        
        .dark .notion-glass-wrapper .notion-code {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .notion-glass-wrapper .notion-callout {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }
        
        .dark .notion-glass-wrapper .notion-callout {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .notion-glass-wrapper .notion-quote {
          border-left: 3px solid #6366f1;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 0 12px 12px 0;
          padding: 1rem 1.5rem;
        }
        
        .notion-glass-wrapper .notion-link {
          color: #6366f1;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        
        .notion-glass-wrapper .notion-link:hover {
          border-color: #6366f1;
        }
        
        .notion-glass-wrapper .notion-collection-header {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 12px;
        }
        
        .dark .notion-glass-wrapper .notion-collection-header {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .notion-glass-wrapper .notion-table {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .dark .notion-glass-wrapper .notion-table {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .notion-glass-wrapper .notion-table th,
        .notion-glass-wrapper .notion-table td {
          border-color: rgba(0, 0, 0, 0.1);
        }
        
        .dark .notion-glass-wrapper .notion-table th,
        .dark .notion-glass-wrapper .notion-table td {
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        .notion-glass-wrapper .notion-asset-wrapper img {
          border-radius: 12px;
        }
        
        .notion-glass-wrapper .notion-bookmark {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }
        
        .dark .notion-glass-wrapper .notion-bookmark {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .notion-glass-wrapper .notion-hr {
          border-color: rgba(0, 0, 0, 0.1);
        }
        
        .dark .notion-glass-wrapper .notion-hr {
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ClientNotionRenderer;
