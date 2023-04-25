import React, { useState, useEffect } from 'react';
import { DataContext } from './DataContext';
import { fetchData } from '../services/ApiService';

const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getData();
    }, []);

    const getData = async (page) => {
        const result = await fetchData(page || currentPage);
        setData(prevData => [...prevData, ...result]);
        setCurrentPage(page => page + 1);
    };

    const select = (card) => {
        setSelectedCard(card);
    };

    return (
        <DataContext.Provider value={{ data, select, setSelectedCard, selectedCard, getData }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataContextProvider;