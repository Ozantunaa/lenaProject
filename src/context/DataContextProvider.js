import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';
import { fetchData } from '../services/ApiService';

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    const select = (card) => {
        setSelectedCard(card);
    }

    return (
        <DataContext.Provider value={{ data, select, setSelectedCard, selectedCard }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContextProvider;