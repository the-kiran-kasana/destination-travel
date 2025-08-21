import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export function StateProvider({ children }) {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTravelStyles, setSelectedTravelStyles] = useState([]);

  return (
    <StateContext.Provider
      value={{
        selectedInterests,
        setSelectedInterests,
        selectedActivities,
        setSelectedActivities,
        selectedTravelStyles,
        setSelectedTravelStyles,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useSharedState() {
  return useContext(StateContext);
}
