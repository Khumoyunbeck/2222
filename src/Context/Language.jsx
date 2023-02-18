import React, { useState } from 'react'

const Context = React.createContext()

function Provider({ children }) {
    const [lang, setLang] = useState('uz')

    return <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
}

export { Context, Provider }
