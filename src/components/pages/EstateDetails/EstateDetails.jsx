import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';


const EstateDetails = () => { 
  const details = useLoaderData();
  const {id} = useParams();
  
  const item = details.find(item => item.id === id);
  console.log(item)

  return (
    <div className="card bg-base-100 w-2/3 shadow-xl mx-auto">
      <Helmet 
      title="RiverView Resort | Estate Details"
      ></Helmet>
  <figure className="px-10 pt-10">
    <img
      src={item.relevant_image}
      alt="Resort"
      className="rounded-xl" />
  </figure>
  <div className="card-body mx-auto">
    <h2 className="card-title">{item.estate_title}</h2>
    <p>{item.description}</p>
    <div className="flex justify-between">
      <p>Location: {item.location}</p>
      <p>Area: {item.area}</p>
      </div>
    <div>
      <div className="flex justify-between">      
      <div>
        <p>Facilities -</p>
        <div className="ps-16">
        {item.facilities.map((list, idx) => <li key={idx}>{list}</li>)}
        </div>
      </div>      
      </div>
      <div className="flex justify-between py-4">
      <p>Price: {item.price}</p>
      <p>Status: {item.status}</p>
      </div>
      
    </div>
    
  </div>
</div>
  );
};

export default EstateDetails;