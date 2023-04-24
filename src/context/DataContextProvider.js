import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.lenasoftware.com/api/v1/en/maestro/1');
                const json = await response.json();
                setData(json.result)
            } catch (error) {
                console.log(error)
            };
        };
        fetchData()
    }, []);


    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContextProvider;