import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const {user} = useState({
        name: "Osman",
        email: "osrbck@gmail.com",
        dob: "01/03/1994",
    })
    return <UserContext.Provider value={{ user }}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext);