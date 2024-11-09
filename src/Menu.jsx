export default function Menu({ activeItem, setActiveItem, list = [] }) {
  return (
    <div className="menu">
      {list.map((item, i) => (
        <button
          type="button"
          key={i}
          className={
            activeItem === item ? "btn btn-success m-1" : "btn btn-primary m-1"
          }
          onClick={() => setActiveItem(item)}>
          {item}
        </button>
      ))}
      <button
        type="button"
        className={
          activeItem === "none" ? "btn btn-success m-1" : "btn btn-primary m-1"
        }
        onClick={() => setActiveItem("none")}>
        None
      </button>
    </div>
  );
}
