"use client";
import React from "react";

import { SandpackCodeEditor } from "@codesandbox/sandpack-react";

const CodeEditor: React.FC = () => {

  return (
    <div className="h-full w-full bg-gray-900 ">
      <SandpackCodeEditor
        theme="dark"
        style={{ height: "100%" }}
        showTabs={true} // Shows file tabs
        showLineNumbers={true}
        wrapContent={true}
      />
    </div>
  );
};

export default CodeEditor;
