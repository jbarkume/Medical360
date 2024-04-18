import React, { useContext, useState, useEffect,useRef } from "react";
import Banner from "../components/Banner";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import GlobalContext from "../store/GlobalContext";
import { useAuthContext } from "../hooks/useAuthContext";

const AllEquipmentPage = () => {
  const { user } = useAuthContext();
  const { store } = useContext(GlobalContext);
  const lastUpdatedRef = useRef(store.lastUpdated);
  const [equipments, setEquipments] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    const fetchEquipments = async () => {
      if (store.equipments.length === 0 ) { 
        // Fetch only if the equipments array is empty
        await store.getAllEquipments();
      }
      setEquipments(store.equipments);
    };
   
    
    fetchEquipments();
  }, [store.equipments]); 
  useEffect(() => {
    const fetchEquipments = async () => {
      if ( store.lastUpdated !== lastUpdatedRef.current) { 
        lastUpdatedRef.current = store.lastUpdated;
        await store.getAllEquipments();
      }
      setEquipments(store.equipments);
    };
   
    
    fetchEquipments();
  }, [store.lastUpdated]);
  

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filterEquipments = equipments.filter((equipment) =>
    equipment.equipmentName.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Banner goBackPath="/resource-management" />
      <div className="flex justify-center my-4">
        <div className="text-blue-500 p-4 rounded-lg text-3xl">
          All Equipment
        </div>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SearchBar onSearch={handleSearch} />
        {user.isAdmin && (
          <Link
            to={"/new-equipment"}
            className="bg-[#2260FF] text-white px-2 py-1 rounded-md font-medium text-xl"
          >
            New Equipment
          </Link>
        )}
      </div>
      <div className="p-8">
        <Table
          cards={filterEquipments}
          isAdmin={user.isAdmin}
          context={"equipment"}
        />
      </div>
    </>
  );
};

export default AllEquipmentPage;
