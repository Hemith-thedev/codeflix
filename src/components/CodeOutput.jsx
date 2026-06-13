export default function CodeOutput({
  className = "",
  Output = "", // Now it safely expects the clean HTML code string!
  label = "",
  type = "html",
}) {
  const getBgColorClass = () => {
    if (type === "html") return "bg-orange-950";
    if (type === "css") return "bg-cyan-950";
    if (type === "js") return "bg-yellow-950";
    if (type === "ts") return "bg-blue-950";
    return "bg-stone-950";
  };

  return (
    <div
      className={`output-wrapper flex flex-col justify-start items-start h-fit w-full bg-white/5 rounded-2xl ${getBgColorClass()} ${className}`}
    >
      {label && <p className="p-4! mb-0! font-medium text-white">{label}</p>}
      
      {/* Strings can be safely rendered as elements using dangerouslySetInnerHTML */}
      <div
        className="output-container output flex flex-col justify-start items-start h-fit w-full bg-white rounded-2xl p-3! text-black!"
        dangerouslySetInnerHTML={{ __html: Output }} 
      />
    </div>
  );
}