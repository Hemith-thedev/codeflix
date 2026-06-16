import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3, FaChevronDown } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

const CodeContainer = ({
  header = false,
  type,
  label = "",
  Code = <></>,
  defaultlyOpen = true,
  showCollapse = true,
  showCopy = true,
  isCodeGenerating = false,
  canCopy = true
}) => {
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
  if (!React.isValidElement(Code) && typeof Code !== "string") {
    errors.push(
      <span>
        The value of 'Code' must be a valid React element or string snippet, you
        have passed a '{Code}'.
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
  if (typeof showCollapse !== "boolean") {
    errors.push(
      <span>
        The value of 'showCollapse' must be a 'boolean', but you have passed a '
        {showCollapse}'.
      </span>,
    );
  }
  if (typeof showCopy !== "boolean") {
    errors.push(
      <span>
        The type of 'showCopy' must be a 'boolean', but you have passed a '
        {typeof showCopy}'.
      </span>,
    );
  }
  if (typeof showCopy !== "boolean") {
    errors.push(
      <span>
        The value of 'showCopy' must be a 'boolean', but you have passed a '
        {showCopy}'.
      </span>,
    );
  }

  const [isOpen, setIsOpen] = useState(defaultlyOpen);
  const [isCopying, setIsCopying] = useState(false);
  const [displayedLetters, setDisplayedLetters] = useState([]);

  // 🎯 Target scroll boundary workspace viewport container layout reference tracking reference hook
  const scrollContainerRef = useRef(null);

  const getRawStringCode = (codeNode) => {
    if (typeof codeNode === "string") return codeNode;
    if (React.isValidElement(codeNode)) {
      return React.Children.toArray(codeNode.props.children)
        .map((child) => (typeof child === "string" ? child : ""))
        .join("");
    }
    return "";
  };

  const fullTextCode = getRawStringCode(Code);

  // ⚡ Typewriter and Dynamic Letters Processing System Hook
  useEffect(() => {
  if (isCodeGenerating === true) {
    setDisplayedLetters([]);
    let currentIndex = 0;
    const lettersArray = fullTextCode.split("");
    const charsPerTick = 3; // ✨ OKKA SAPUDUKI ENNI CHARACTERS VELLALI ANEDI IDI! (Speed ni batti 3, 5, or 10 pettuko, bangaram)

    const intervalId = setInterval(() => {
      if (currentIndex < lettersArray.length) {
        // Multi-character block extract configuration setup
        const nextChunk = lettersArray.slice(currentIndex, currentIndex + charsPerTick);
        
        setDisplayedLetters((prev) => [...prev, ...nextChunk]);
        currentIndex += charsPerTick;
      } else {
        clearInterval(intervalId);
      }
    }, 1); // 1ms chunk updates

    return () => clearInterval(intervalId);
  } else {
    setDisplayedLetters(fullTextCode.split(""));
  }
}, [isCodeGenerating, fullTextCode]);

  // 📜 🚀 The Auto Scroll Effect Hook (Triggers execution instantly whenever data letters array appends)
  useEffect(() => {
    if (isCodeGenerating && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Instantly forces layout frames properties logic pointers to scroll downward limits cleanly
      container.scrollTop = container.scrollHeight;
    }
  }, [displayedLetters, isCodeGenerating]);

  const handleCopyAction = () => {
    if (fullTextCode) {
      window.navigator.clipboard
        .writeText(fullTextCode + "\n")
        .then(() => {
          setIsCopying(true);
          setTimeout(() => setIsCopying(false), 2000);
        })
        .catch((err) => console.error("Clipboard copy failed:", err));
    }
  };

  const logo = (size) => {
    if (type === "html") return <FaHtml5 size={size} color="#E34F26" />;
    if (type === "css") return <FaCss3 size={size} color="#1572B6" />;
    if (type === "js") return <IoLogoJavascript size={size} color="#F7DF1E" />;
    if (type === "ts") return <BsTypescript size={size} color="#3178C6" />;
    return null;
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

  return (
    <div
      className={`code-container ${type} flex flex-col rounded-2xl h-fit w-full`}
    >
      {header && (
        <div className="header flex justify-between items-center h-fit w-full p-4! rounded-2xl">
          <div className="flex justify-start items-center gap-2">
            {type && <div>{logo(36)}</div>}
            {label ? <p className="mb-0!">{label}</p> : <></>}
          </div>
          <div className="flex justify-end items-center gap-4">
            {showCollapse && (
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <p className="mb-0! primary-button small">
                  <FaChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </p>
              </button>
            )}
            {showCopy && (
              <button onClick={handleCopyAction}>
                <p className="mb-0! primary-button small">
                  {isCopying ? <LuCopyCheck size={18} /> : <LuCopy size={18} />}
                </p>
              </button>
            )}
          </div>
        </div>
      )}
      {isOpen && (
        /* 🥰 Inthaku mundu ref missing ikkada! Ippudu scroll super fluid ga work avthundi! */
        <div
          ref={scrollContainerRef}
          className="code-container-scrollbar max-h-96 w-full overflow-auto"
        >
          <div className="code h-fit rounded-2xl w-fit">
            <pre className="h-fit w-full p-4!">
              <code className={`h-fit w-full text-sm leading-relaxed text-slate-300 whitespace-pre ${canCopy ? "select-auto" : "select-none"}`}>
                {displayedLetters.map((char, index) => (
                  <span key={index} className="">
                    {char}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeContainer;

// return (
//   <div className="flex flex-col bg-[#111111] rounded-2xl h-fit w-full">
//     {header && (
//       <div className="flex justify-between items-center h-fit w-full p-4! bg-white/5 rounded-2xl">
//         <div className="flex justify-start items-center gap-2">
//           {type && <div>{logo(36)}</div>}
//           {label ? <p className="mb-0!">{label ? label : ""}</p> : <></>}
//         </div>
//         <div className="flex jutify-end items-center gap-4">
//           {showCollapse && (
//             <button onClick={() => setIsOpen((prev) => !prev)}>
//               <p className="mb-0! primary-button small">
//                 <FaChevronDown
//                   size={18}
//                   style={{ rotate: isOpen ? "180deg" : "0deg" }}
//                 />
//               </p>
//             </button>
//           )}
//           <button onClick={() => setIsCopying(true)}>
//             <p className="mb-0! primary-button small">
//               {isCopying ? <LuCopyCheck size={18} /> : <LuCopy size={18} />}
//             </p>
//           </button>
//         </div>
//       </div>
//     )}
//     {isOpen && (
//       <div className="code-container-scrollbar h-fit w-full overflow-auto">
//         <div className="code h-fit rounded-2xl max-h-96 w-fit">
//           <pre className="h-fit w-full p-4!">
//             <code className="h-fit w-full font-mono text-sm leading-relaxed text-slate-300 whitespace-pre">
//               {displayedCode}
//             </code>
//           </pre>
//         </div>
//       </div>
//     )}
//   </div>
// );
