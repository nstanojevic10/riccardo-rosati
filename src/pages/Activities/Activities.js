import React from "react";
import "./Activities.scss";

import photo18 from "../../../src/assets/activities/sep2018.jpg";
import photo17 from "../../../src/assets/activities/sep2018-2.jpg";
import photo16 from "../../../src/assets/activities/apr2018.jpg";
import photo15 from "../../../src/assets/activities/okt2017.jpg";
import photo14 from "../../../src/assets/activities/sep2017.jpg";
import photo13 from "../../../src/assets/activities/jun2017.jpg";
import photo12 from "../../../src/assets/activities/mar2017.jpg";
import photo11 from "../../../src/assets/activities/feb2017.jpg";
import photo10 from "../../../src/assets/activities/okt2016.jpg";
import photo9 from "../../../src/assets/activities/jun2016.jpg";
import photo8 from "../../../src/assets/activities/apr2016.jpg";
import photo7 from "../../../src/assets/activities/dec2015.jpg";
import photo6 from "../../../src/assets/activities/okt2015.jpg";
import photo5 from "../../../src/assets/activities/sep2015.jpg";
import photo4 from "../../../src/assets/activities/apr2015.jpg";
import photo3 from "../../../src/assets/activities/feb2015.jpg";
import photo2 from "../../../src/assets/activities/feb2015-2.jpg";
import photo1 from "../../../src/assets/activities/feb2015-3.jpg";

const Activities = ({ activity, title }) => {
  const imgPaths = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18
  ];

  const allActivity = activity.map((activ) => {

    const imgPath = imgPaths[activ.id]

    return (
      <div className="container" key={activ.id}>
        <h3 className="activTitle">{activ.date}</h3>
        <p className="activText">{activ.text}</p>
        <img className="activImg" src={imgPath} alt={activ.id} />
      </div>
    );
  });

  return (
    <div className="text">
      <h2>{title.activities}</h2>
      {allActivity}
    </div>
  );
};

export default Activities;
