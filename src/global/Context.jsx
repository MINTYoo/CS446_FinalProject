
import React, { createContext, useState, useContext } from 'react';


const InteractionContext = createContext();


export const InteractionProvider = ({ children }) => {
  const [interactionCount, setInteractionCount] = useState(0);


  const incrementCount = () => setInteractionCount((prevCount) => prevCount + 1);

  return (
    <InteractionContext.Provider value={{ interactionCount, incrementCount }}>
      {children}
    </InteractionContext.Provider>
  );
};


export const useInteraction = () => useContext(InteractionContext);
