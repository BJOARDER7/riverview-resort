import { Helmet } from "react-helmet";

const Booking = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet title="RiverView Resort | Booking"></Helmet>
      <h2 className="text-center font-bold text-lg md:text-2xl">Please Book Now</h2>
      <div className="flex flex-col justify-center space-y-2 md:space-y-8 my-4 md:my-8">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>VIP Room</option>
            <option>Business Class</option>
            <option>Average</option>
          </select>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">Room</span>
            <button className="btn join-item">Search</button>
          </div>
        </div>
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
