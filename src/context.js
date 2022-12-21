import React, {useContext, useState} from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [showLinks, setShowLinks] = useState(false)

    return <AppContext.Provider value={{
        showLinks,
        setShowLinks,
      }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
export { AppContext, AppProvider }