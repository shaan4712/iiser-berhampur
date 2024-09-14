import React, { createContext, useState, useContext } from 'react';

const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([
    {
      instrumentName: "Spectrometer",
      purpose: "Analyze light spectra",
      fromDate: "2024-09-15",
      toDate: "2024-09-20",
      fuelLeft: "50",
    },
    {
      instrumentName: "Microscope",
      purpose: "Cell structure study",
      fromDate: "2024-09-16",
      toDate: "2024-09-18",
      fuelLeft: "75",
    },
    {
      instrumentName: "Centrifuge",
      purpose: "Sample separation",
      fromDate: "2024-09-17",
      toDate: "2024-09-19",
      fuelLeft: "60",
    },
  ]);

  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <RecordsContext.Provider value={{ records, addRecord }}>
      {children}
    </RecordsContext.Provider>
  );
};

export const useRecords = () => useContext(RecordsContext);