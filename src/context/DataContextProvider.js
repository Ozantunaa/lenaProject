import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [selectedCart, setSelectedCart] = useState(null);

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

    const select = (cart) => {
        setSelectedCart(cart);
    }

    return (
        <DataContext.Provider value={{ data,select,setSelectedCart,selectedCart }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContextProvider;