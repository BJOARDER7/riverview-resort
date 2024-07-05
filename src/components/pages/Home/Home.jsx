import Estate from "../Estate/Estate";
import Slider from "../Slider/Slider";
import { useLoaderData } from "react-router-dom";


const Home = () => { 
  const items = useLoaderData();
  console.log(items)
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
        {
          items.map(item => <Estate 
            key={item.id}
            item={item}
            ></Estate>)
        }
      </div> 
      </div>
  );
};

export default Home;