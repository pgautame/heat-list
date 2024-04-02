import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useworkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
