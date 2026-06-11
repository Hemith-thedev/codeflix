import React from "react";
import { useState } from "react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";

const CodeContainer = ({
  header = false,
  type,
  label = "",
  Code = <></>,
  defaultlyOpen = false,
  showCollapse = false,
}) => {
  // checking each prop type and value
  const errors = [];
  if (typeof header !== "boolean") {
    errors.push(
      <span>
        The type of 'header' must be 'boolean', you have passed a '
        {typeof header}'.
      </span>,
    );
  }
  if (typeof type !== "string") {
    errors.push(
      <span>
        The type of 'type' must be 'string', you have passed a '{typeof type}'.
      </span>,
    );
  }
  if (type !== "html" && type !== "css" && type !== "js" && type !== "ts") {
    errors.push(
      <span>
        The value of 'type' must be 'html' / 'css' / 'js' / 'ts', you have
        passed its value as '{type}'.
      </span>,
    );
  }
  if (typeof label !== "string") {
    errors.push(
      <span>
        The type of 'label' must be a 'string', you have passed a '
        {typeof label}'.
      </span>,
    );
  }
  if (!React.isValidElement(Code) && typeof Code !== "string") {
    errors.push(
      <span>
        The type of 'Code' must be a valid React element or string snippet, you
        have passed a '{typeof Code}'.
      </span>,
    );
  }
  if (typeof defaultlyOpen !== "boolean") {
    errors.push(
      <span>
        The type of 'defaultlyOpen' must be a 'boolean', but you have passed a '
        {typeof defaultlyOpen}'.
      </span>,
    );
  }
  if (defaultlyOpen !== false && defaultlyOpen !== true) {
    errors.push(
      <span>
        The value of 'defaultlyOpen' must be a 'boolean', but you have passed
        its value as '{defaultlyOpen}'.
      </span>,
    );
  }
  if (typeof showCollapse !== "boolean") {
    errors.push(
      <span>
        The type of 'showCollapse' must be a 'boolean', but you have passed a '
        {typeof showCollapse}'.
      </span>,
    );
  }

  // valid component
  const [isOpen, setIsOpen] = useState(defaultlyOpen);
  let logo = (size) => {
    if (type === "html") return <FaHtml5 size={size} color="#E34F26" />;
    if (type === "css") return <FaCss3 size={size} color="#1572B6" />;
    if (type === "js") return <IoLogoJavascript size={size} color="#F7DF1E" />;
    if (type === "ts") return <BsTypescript size={size} color="#3178C6" />;
  };
  if (errors.length > 0) {
    return (
      <div className="p-4! bg-red-950 rounded-2xl">
        <h3 className="text-red-500">Error in CodeContainer Component</h3>
        {errors.map((e, i) => (
          <p key={i} className="mb-0! text-red-300">
            {i + 1}. {e}
          </p>
        ))}
      </div>
    );
  }
  if (errors.length === 0) {
    return (
      <div className="flex flex-col bg-[#111111] rounded-2xl h-fit w-full">
        {header && (
          <div className="flex justify-between items-center h-fit w-full p-4! bg-white/5 rounded-2xl">
            <div className="flex justify-start items-center gap-2">
              {type && <div>{logo(36)}</div>}
              {label ? <p className="mb-0!">{label ? label : ""}</p> : <></>}
            </div>
            <div className="flex jutify-end items-center gap-4">
              {showCollapse && <button onClick={() => setIsOpen((prev) => !prev)}>
                <p className="mb-0! primary-button small">
                  {isOpen ? "Collapse" : "Show"}
                </p>
              </button>}
              <button>
                <p className="mb-0! primary-button small">Copy</p>
              </button>
            </div>
          </div>
        )}
        {isOpen && (
          <div className="code-container-scrollbar h-fit w-full overflow-auto">
            <div className="code h-fit rounded-2xl max-h-96 w-fit">
              <pre className="h-fit w-full p-4!">
                <code className="h-fit w-full">{Code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default CodeContainer;
