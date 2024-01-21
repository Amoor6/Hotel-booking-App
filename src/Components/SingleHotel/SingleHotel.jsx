import { useParams } from "react-router-dom";

import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelsProvider";
import { useEffect } from "react";

function SingleHotel() {
  const { id } = useParams();
  const { gethotel, isLoadingCurrenteHotel, currentHotel } = useHotels();

  useEffect(() => {
    gethotel(id);
  }, [id]);

  if (isLoadingCurrenteHotel || !currentHotel) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
          {currentHotel.number_of_reviews} reviews &bull;{" "}
          {currentHotel.smart_location}
        </div>
        <img src={currentHotel.cl_picture_url} alt={currentHotel.name}></img>
      </div>
    </div>
  );
}

export default SingleHotel;
