import { createContext, useState} from "react";
import useFetch from "./useFetch";

export const MyContext = createContext(null);

const AppContext = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const [checkedArray, setCheckedArray] = useState([]);
    const {data, setData} = useFetch();

  return (
    <MyContext.Provider
        value={{
            appData: [data, setData],
            appActive: [isActive, setIsActive],
            appCheckedData: [checkedArray, setCheckedArray]
        }}
    >
        {children}
    </MyContext.Provider>
  )
}

export default AppContext