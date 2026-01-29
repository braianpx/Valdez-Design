interface PointerProps {
  text:string
}
const Pointer = ({text}: PointerProps) => {
  return (<>
    <span className="text-secondary"> • </span>
      {text}
    <span className="text-secondary"> • </span>
    </>
  ) 
};
export default Pointer;
