import React from 'react';
import Table from '../components/Table';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';

const PatientList = () => {
  // Hardcoded data for the list of patients
  const patientsData = [
    {
      Name: 'John Doe',
      Age: '30',
      Place: 'Springfield',
      Date: '12/04/2024',
      Consultant: 'Dr. Smith',
      'More Info': 'Info',
    },
    {
      Name: 'Jane Smith',
      Age: '25',
      Place: 'Shelbyville',
      Date: '12/05/2024',
      Consultant: 'Dr. Johnson',
      'More Info': 'Info',
    },
    {
      Name: 'Emma Jones',
      Age: '45',
      Place: 'Capital City',
      Date: '12/06/2024',
      Consultant: 'Dr. Brown',
      'More Info': 'Info',
    },
    {
      Name: 'Oliver Twist',
      Age: '38',
      Place: 'North Haverbrook',
      Date: '12/07/2024',
      Consultant: 'Dr. Taylor',
      'More Info': 'Info',
    }
   
  ];

  return (
    <>
    <Banner goBackPath={"/apppage"}/>
    <SearchBar/>
    <div className="p-8">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold text-center ">List of Patients</h2>
      </div>
      <Table cards={patientsData} />
    </div>
    </>
  );
};

export default PatientList;
