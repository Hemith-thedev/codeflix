export default function CodeOutput({ className = "", Output }){
  return (
    <div className={`flex flex-col justify-start items-start h-fit w-full ${className} no-text-resize`}>
      {Output}
    </div>
  )
}