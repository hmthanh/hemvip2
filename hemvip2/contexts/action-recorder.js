"use client"

import { createContext, useContext, useState } from "react"

const ActionRecorderContext = createContext({
  actions: ["Actions 1", "Actions 2"],
  addAction: () => {},
})

export const useActionRecorder = () => useContext(ActionRecorderContext)

export function ActionRecorderProvider({ children }) {
  const [actions, setActions] = useState([])

  const addAction = (newAction) => {
    console.log("action ", [...actions, newAction])
    setActions([...actions, newAction])
  }

  return (
    <ActionRecorderContext.Provider value={{ actions, addAction }}>
      {children}
    </ActionRecorderContext.Provider>
  )
}
