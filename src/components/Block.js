import "./BlockColor.css";
import BlockItem from "./BlockItem";

function Block({ block }) {
  return (
    <div>
      {block.map((item) => (
        <BlockItem {...item} key={item.id} />
      ))}
    </div>
  );
}

export default Block;
