import { createContext, useContext, useState } from "react";

// Create filter context
const FilterContext = createContext(null);

export function FilterProvider({ children }) {
  // Default to all todos
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// Access filter context
export function useFilter() {
  return useContext(FilterContext);
}
