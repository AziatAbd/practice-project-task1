function BlockItem(props) {
  function color() {
    if (Number(props.block)) {
      return "red";
    } else {
      return props.block;
    }
  }

  return <div className={`color ${color()}`}>{props.block}</div>;
}

export default BlockItem;
