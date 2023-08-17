import React, { useEffect, useState } from "react";
import Data from "../../../Utils/GroceriesData.json";
import Navigationbar from "../../Components/Header/Navigationbar";
import FooterCom from "../../Components/Footer/FooterCom";
import Cardmap from "../../Components/card/Cardmap";

export default function AllProduct() {
  let [displayData, setDisplayData] = useState(Data);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("------>");
    let filter = Data.filter((e) => {
      return e.text.toLowerCase().includes(searchText.toLowerCase());
    });
    setDisplayData(filter);
  }, [searchText]);
  return (
    <>
      <Navigationbar setSearchText={setSearchText} />
      <div className="d-flex flex-wrap p-3" style={{ gap: "15px" }}>
        {displayData.map((e, i) => {
          return <Cardmap key={i} data={e} />;
        })}
      </div>
      <FooterCom />
    </>
  );
}
