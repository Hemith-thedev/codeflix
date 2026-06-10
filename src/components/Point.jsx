const Point = ({ serialNo, subject, label }) => {
  // 1. Single values coding formatting (e.g., HTML, CSS, Server-side Languages -> a.)
  if (!Array.isArray(label)) {
    return (
      <p>
        {String.fromCharCode(97 + serialNo)}.{" "}
        <span className="font-semibold">{subject}</span>:{" "}
        <span className="text-gray-300">{label}</span>
      </p>
    );
  }

  // 2. Deep Nested Lists (e.g., Responsibilities with sub-arrays -> b. sequence pattern)
  return (
    <div className="w-full space-y-2">
      {/* Dynamic Serial marker mapping directly matches 'b.' exactly like your sketch */}
      <p>
        {String.fromCharCode(97 + serialNo)}.{" "}
        <span className="font-semibold">{subject}:</span>
      </p>

      {/* Inner points switch structure smoothly to standard bullet listings */}
      <ul className="ml-6! space-y-2 text-gray-300">
        {label.map((subItem, subIndex) => (
          <li key={subIndex}>
            <p className="point-bullet-text">{subItem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Point;
