import React, { createContext, useState, useRef } from 'react'

export const MenuContext = createContext()

const MenuContextProvider = (props) => {

  const [menuActive, setMenuActive] = useState(false)
  
  const toggleMenuActive = () => {
      setMenuActive(!menuActive)
  }

  let menuContainerRef = useRef()

  const dur = 0.7
  const del = 0.1

  return (
    <MenuContext.Provider value={{ menuActive,  setMenuActive, toggleMenuActive, menuContainerRef, dur, del }}>
      {props.children}
    </MenuContext.Provider>
  )
}
export default MenuContextProvider