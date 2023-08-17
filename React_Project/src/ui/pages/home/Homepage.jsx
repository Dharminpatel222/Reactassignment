import React, { useState } from "react";
import GroceriesData from "../../../Utils/GroceriesData.json";
import "./home.css";
import Navigationbar from "../../Components/Header/Navigationbar";
import Cardmap from "../../Components/card/Cardmap";
import FooterCom from "../../Components/Footer/FooterCom";

export default function Homepage() {
  const [data, setData] = useState(GroceriesData);
  const [search, setsearch] = useState("");

  return (
    <>
      <div>
        <Navigationbar setsearch={setsearch} />
      </div>
      
      <div className="bgimg"></div>
      <div className="bestproduct">
        <div className="flexbox1">
          <div className="imgproduct">
            <img
              src="https://images.pexels.com/photos/62329/pexels-photo-62329.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="flexbox2">
          <div className="head1">
            <h3>Best Quality Products</h3>
          </div>
          <di className="head2">
            <h1>Join The Organic Movement!</h1>
          </di>
          <div className="descrption">
            <h5 style={{ color: "black", paddingBottom: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h5>
          </div>
          <div
            className="btn btn-success"
            style={{ fontSize: "15px", padding: "13px 35px" }}
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={{ paddingRight: "15px" }}
            ></i>
            <span style={{ fontWeight: "bold" }}>SHOP NOW</span>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", padding: "100px 100px" }}>
        Best Selling Products
      </h1>
      <div className="card-flex ">
        {data.map((e, i) => {
          return <Cardmap data={e} key={i} />;
        })}
      </div>

      <FooterCom />
    </>
  );
}
