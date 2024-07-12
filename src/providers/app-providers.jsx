"use client"
import { IconlyProvider } from "react-iconly"

export const AppProviders = ({ children }) => {
  return (
    <>
      <IconlyProvider
        set='bulk'
        primaryColor=''
        secondaryColor=''
        stroke='bold'
        size='small'
      >
        {children}
      </IconlyProvider>
    </>
  )

}