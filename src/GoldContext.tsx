import React, { createContext, useContext, useState } from 'react';

// Define the context structure
const GoldContext = createContext({
  gold: 0,
  bankTotalGold: 0,
  incrementGold: () => {},
  depositGold: () => {},
});

export const GoldProvider = ({ children }: { children: React.ReactNode }) => {
  const [gold, setGold] = useState(0); // Initial gold count
  const [bankTotalGold, setBankTotalGold] = useState(0); // Initial bank gold count

  // Increment gold with a limit of 99
  const incrementGold = () =>
    setGold(prevGold => {
      const result = prevGold < 99 ? prevGold + 1 : 99;
      return result;
    });

  // Deposit gold to the bank
  const depositGold = () =>
    setGold(prevGold => {
      if (prevGold > 0) {
        setBankTotalGold(prevBankGold => prevBankGold + prevGold);
        return 0; // Reset user's gold after depositing
      }
      return prevGold; // No change if no gold to deposit
    });

  return (
    <GoldContext.Provider
      value={{ gold, bankTotalGold, incrementGold, depositGold }}
    >
      {children}
    </GoldContext.Provider>
  );
};

export const useGold = () => useContext(GoldContext);
