import React , { createContext , useReducer } from "react";
import AppReducer from './AppReducer';

const initailState = {
    transactions: []
}

export const GlobalContext = createContext(initailState);

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initailState);

    function deleteTransactions(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    function addTransactions(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransactions,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
}