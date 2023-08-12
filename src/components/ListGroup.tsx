interface Props {
  items: string[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export default function ListGroup(props: Props) {
  return (
    <>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={`list-group-item ${
              props.selectedIndex === index ? "active" : ""
            }`}
            onClick={() => props.setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
