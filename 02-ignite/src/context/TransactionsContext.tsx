import { createContext, useEffect, useState, useContext } from "react";
import { Transaction, TransactionsProviderProps, TransactionInput, TransactionsContextData  } from '../types/transactions';
import {api} from '../services/api';



const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransaction] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransaction(response.data.transactions))
    }, [])
    
    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
        })

        const { transaction } = response.data;
        setTransaction([...transactions, transaction])

         
    }
    return (
        <TransactionsContext.Provider value={{transactions, createTransaction }}>{children}</TransactionsContext.Provider>
    )
}

function useTransactionContext(): TransactionsContextData {
    const context = useContext(TransactionsContext);
    if (!context) {
      throw new Error(
        "This Context must be used within an TransactionContext"
      );
    }
    return context;
  }
  
  export { useTransactionContext };
  