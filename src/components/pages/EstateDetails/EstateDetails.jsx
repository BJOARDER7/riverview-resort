import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


const EstateDetails = () => {
  // const {relevant_image, estate_title, description, price, status, area, location, facilities} = item;
  // console.log(item)
  const {id} = useParams();

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={relevant_image}
      alt="Resort"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>{description}</p>
    <div className="flex justify-between">
      <p>Location: {location}</p>
      <p>Area: {area}</p>
      </div>
    <div>
      <div className="flex justify-between">      
      <div>
        <p>Facilities -</p>
        <div className="ps-16">
        {facilities.map((list, idx) => <li key={idx}>{list}</li>)}
        </div>
      </div>      
      </div>
      <div className="flex justify-between py-4">
      <p>Price: {price}</p>
      <p>Status: {status}</p>
      </div>
      
    </div>
    
  </div>
</div>
  );
};

EstateDetails.propTypes = {
  item: PropTypes.object
}

export default EstateDetails;