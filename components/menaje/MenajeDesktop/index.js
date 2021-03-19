// IMPORTS
  // - Modules
  import { useState } from 'react'
  // - Components
  import MenajeLayout from './MenajeLayout'
  import PacksInfo from './PacksInfo'
  import Mensual from './Mensual'
  import Esporadico from './Esporadico'
  import StarterPack from './StarterPack'
//


// MAIN COMPONENT
  export default function MenajeDesktop() {

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

    return (
      <>
        <MenajeLayout setCurrentPack={setCurrentPack} >
          { checkCurrentPack() }
        </MenajeLayout>
      </>
    )
  }
//
