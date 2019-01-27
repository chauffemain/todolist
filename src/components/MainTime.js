import React from "react";

function MainTime() {
  const date = new Date();
  const hours = date.getHours();
  //splitstyles
  const splitStyle = {
    //    color: "#FF8C00",
    fontSize: 24
  };

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
    splitStyle.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <h1 style={{ color: "#FF8C00", backgroundColor: "#FF2D00" }}>
        Good {timeOfDay}
      </h1>
      <h1 style={splitStyle}>it is {date.getHours() % 12}</h1>
    </div>
  );
}

export default MainTime;
