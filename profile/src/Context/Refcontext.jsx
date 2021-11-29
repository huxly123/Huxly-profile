const { createContext, useRef } = require("react");


export const Refcontext = createContext()




export const RefcontextProvider = ({ children }) => {
    
    const aboutRef = useRef(null)
    
    const projectRef=useRef(null)

return(
    <Refcontext.Provider value={{aboutRef,projectRef}}>
        {children}
    </Refcontext.Provider>
)}