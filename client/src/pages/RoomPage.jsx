import React from "react";
import RoomCard from "../components/RoomCard";
import Banner from "../components/Banner";
const RoomPage = () => {
    return (
        <>
            <Banner goBackPath={"/"} />
            <RoomCard/>
            
        </>
    );
}
export default RoomPage;