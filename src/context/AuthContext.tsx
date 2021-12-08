import React, { createContext, useState } from 'react'

export interface IAuthContext {
  authenticated: boolean
  handleLogin(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = () => {
    setAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }
