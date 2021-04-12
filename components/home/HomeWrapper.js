// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Styles
   import { breakpoints, pxToVH } from '../../styles/customStyles/globalStyles'
//

// STYLES
  const HomeWrapperStyle = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width: ${breakpoints.mobileDesign}) {
        display: block;
        max-height: 100vh;
    }
  `
//

// MAIN COMPONENT
  export default function HomeWrapper({children}) {
    return (
        <HomeWrapperStyle>
            {children}
        </HomeWrapperStyle>
    )
  }
//
