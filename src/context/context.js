import { useContext , useState } from 'react';
import db from './firebase';

import { query,collection, onSnapshot} from 'firebase/firestore';

import React from 'react';

const AppContext=React.createContext();

const AppProvider = ({children}) => {

  const [catArr,setCatArr]=useState([]);

const fetchCategory = async( name ) =>{
  const q = query(collection(db, name.toString()));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const newdata=querySnapshot.docs.map(d => d.data());
            setCatArr(newdata);
            console.log(newdata,name);
        });

}

  return<AppContext.Provider value={{
    fetchCategory,
    catArr
  }}>
    { children }
  </AppContext.Provider>
}

export const useGlobalContext=()=>{
  return useContext(AppContext);
}

export {AppProvider};