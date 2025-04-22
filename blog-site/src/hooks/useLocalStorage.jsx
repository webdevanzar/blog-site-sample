import { useEffect, useState } from "react";

export const useLocalStorage = (key, value) => {
  const [storedItems, setStoredItems] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.log("Error while fetching", error);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedItems));
    } catch (error) {
      console.log("error in writing localstorage ", error);
    }
  }, [key, storedItems]);

  return [storedItems, setStoredItems];
};
