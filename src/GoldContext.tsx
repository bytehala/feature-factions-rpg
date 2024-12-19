import React, { createContext, useContext, useState } from 'react';

const GoldContext = createContext({
  gold: 0,
  incrementGold: () => {},
});

export const GoldProvider = ({ children }: { children: React.ReactNode }) => {
  const [gold, setGold] = useState(53); // Initial gold count

  const incrementGold = () =>
    setGold(prevGold => {
      const result = prevGold < 99 ? prevGold + 1 : 99;
      return result;
    });

  return (
    <GoldContext.Provider value={{ gold, incrementGold }}>
      {children}
    </GoldContext.Provider>
  );
};

export const useGold = () => useContext(GoldContext);
