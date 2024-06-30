import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";


const Estates = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    fetch('/hospitality.json')
    .then(res => res.json())
    .then(data => setItems(data));
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
      {
        items.map(item => <Estate
        key={item.id}
        item={item}
        ></Estate>)
      }
    </div>
  );
};

export default Estates;