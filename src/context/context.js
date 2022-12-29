import { useContext } from 'react';

import React from 'react';

const AppContext=React.createContext();

const AppContext.Provider = () => {
  return (
    <div>AppProvider</div>
  )
}

export default AppProvider