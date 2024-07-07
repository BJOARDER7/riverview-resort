import Estate from "../Estate/Estate";
import Slider from "../Slider/Slider";
import { useLoaderData } from "react-router-dom";


const Home = () => { 
  const items = useLoaderData();
  console.log(items)
  return (
    <div>
      <Slider></Slider>
      <div className="legend-font text-center w-full lg:w-3/5 mx-auto my-4 lg:my-12 px-6 space-y-2 lg:space-y-4">
          <h3 className="text-2xl lg:text-4xl font-semibold">Our Estates</h3>
          <p className="text-sm lg:text-lg opacity-60">Beach Resort is a full stack mock resort website template that can be sold to clients to display their hotel rooms and have option to filter : room type, ...</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 m-2 md:m-4">
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