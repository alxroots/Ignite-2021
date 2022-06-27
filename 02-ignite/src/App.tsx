import { useState } from "react";
import { CustomModal } from "./componentes/CustomModal";
import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { TransactionsProvider } from "./context/TransactionsContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header handleModalOpen={handleOpenNewTransactionModal} />
      <Dashboard />
      <CustomModal 
        isOpen={isNewTransactionModalOpen} 
        handleModalClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
    
  );
}

