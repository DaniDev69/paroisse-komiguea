'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type AuthContextType = {
  token: string | null
  isConnected: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  isConnected: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token')
    if (savedToken) setToken(savedToken)
  }, [])

  const login = (newToken: string) => {
    setToken(newToken)
    localStorage.setItem('admin_token', newToken)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('admin_token')
  }

  return (
    <AuthContext.Provider value={{ token, isConnected: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)