import React from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";

function HubPage() {
  return (
    <>
      <Banner goBackPath={"/home"}></Banner>
      <Sidebar></Sidebar>
    </>
  );
}

export default HubPage;
