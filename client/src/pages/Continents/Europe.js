import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card } from "semantic-ui-react";
import cityList from "../../utils/cities";

const Europe = () => {
  return (
    <div>
      <Nav />
      <div className="city-result-title">
        <h1>Europe</h1>
      </div>
      <div className="search-city-display">
        <Card.Group centered>
          {cityList.map((data) => {
            if (data.continent === "Europe") {
              return (
                <Card
                  image={data.image}
                  header={data.city}
                  meta={data.country}
                  className="city-card"
                  key={data.city}
                  href={"/search/" + data.id}
                  color="red"
                />
              );
            } else {
              return null;
            }
          })}
        </Card.Group>
      </div>
      <Footer />
    </div>
  );
};

export default Europe;
