// IMPORTS
  // -Modules
  import { useState, useContext } from 'react'
  // -Components
  import MenajeLayout from './MenajeLayout'
  import PacksInfo from './PacksInfo'
  import Mensual from './Mensual'
  import Esporadico from './Esporadico'
  import StarterPack from './StarterPack'
  import MenuButton from '../../global/MenuButton'
  import { brandingColors } from '../../../styles/customStyles/brandingStyles'
  // -Context
  import { MenuContext } from '../../../contexts/menuContext'
//


// MAIN COMPONENT
  export default function MenajeDesktop() {

    const { menuActive } = useContext(MenuContext)
    const [ currentPack, setCurrentPack ] = useState("default")
    

    const checkCurrentPack = () => {
      if (currentPack === "mensual") {
        return <Mensual />
      } else if (currentPack === "esporadico") {
        return <Esporadico />
      } else if (currentPack === "starterPack") {
        return <StarterPack />
      } else {
        return <PacksInfo />
      }
    }

    const checkMenuColor = () => {
      if ( currentPack === "mensual" && menuActive === false ) {
        return <MenuButton inputColorProp={brandingColors.dark} />
      } else if ( currentPack === "esporadico" && menuActive === false ) {
        return <MenuButton inputColorProp={brandingColors.dark} />
      } else if (currentPack === "starterPack" && menuActive === false ) {
        return <MenuButton inputColorProp={brandingColors.dark} />
      } else {
        return <MenuButton inputColorProp={brandingColors.light} />
      }
    }

    return (
      <>
        <MenajeLayout setCurrentPack={setCurrentPack} >
          { checkCurrentPack() }
          { checkMenuColor() }
        </MenajeLayout>
      </>
    )
  }
//
