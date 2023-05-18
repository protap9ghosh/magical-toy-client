import { useEffect } from "react";

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title} - Magical Toy`;
   }, [title]);
};

export default useTitle;
