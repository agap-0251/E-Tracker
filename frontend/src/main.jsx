import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterContextProvider} from "./context/RouterContext.jsx"
import { ExpenseContextProvider } from './context/ExpenseContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import {PathContextProvider} from './context/PathContext.jsx'
import { NavContext, NavContextProvider } from './context/NavContext.jsx'
import {Analytics} from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterContextProvider>
      <PathContextProvider>
        <NavContextProvider>
          <AuthContextProvider>
            <ExpenseContextProvider>
              <App />
              <Analytics />
            </ExpenseContextProvider>
          </AuthContextProvider>
        </NavContextProvider>
      </PathContextProvider>
    </RouterContextProvider>
  // </React.StrictMode>,
)
