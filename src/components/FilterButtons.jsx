import { useFilter } from "../contexts/FilterContext";

export default function FilterButtons() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filters">
      {["all", "active", "completed"].map(option => (
        <button
          key={option}
          className={filter === option ? "selected" : ""}
          onClick={() => {
            setFilter(option);
            console.log("Filter changed:", option);
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
