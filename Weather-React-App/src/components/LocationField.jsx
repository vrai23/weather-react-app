import React from "react";

const cityNameField = {

  borderRadius: "15px" ,
  borderColor: "#5157EB" ,
width: "266px" ,
height: "58px" ,

}

function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
      style= {cityNameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;
