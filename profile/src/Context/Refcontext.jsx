const { createContext, useRef } = require("react");


export const Refcontext = createContext()




export const RefcontextProvider = ({ children }) => {
    
    const aboutRef = useRef()
    
    const projectRef=useRef()

return(
    <Refcontext.Provider value={{aboutRef,projectRef}}>
        {children}
    </Refcontext.Provider>
)}