// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Components
  import Container from '../global/Container'
  import HomeWrapper from './HomeWrapper'
  import Logo from '../global/Logo'
  import DescriptionHome from './DescriptionHome'
  import MenuButton from '../global/MenuButton'
  import InstagramButton from '../global/globalMobile/InstagramButton'
  // -Styles
  import { breakpoints, pxToVW } from '../../styles/customStyles/globalStyles'
  import { brandingColors } from '../../styles/customStyles/brandingStyles'
//

// MAIN COMPONENT
  const LogoBox = styled.div`
    width: 100%;
    height: 70px;
    margin: ${pxToVW.vw30px};
    max-width: calc(100vw - ${pxToVW.vw30px} - ${pxToVW.vw30px} - ${pxToVW.vw220px});
    @media (max-width: ${breakpoints.laptopDesign}) {
      height: 70px;
      margin: 30px;
      max-width: calc(100vw - 30px - 30px - 220px);
    }
    @media (max-width: ${breakpoints.mobileDesign}) {
      max-width: calc(100vw - ${pxToVW.vw30px} - ${pxToVW.vw30px});
    }
  `
//


// MAIN COMPONENT
  export default function HomeMobile() {
    return (
        <Container>
            <HomeWrapper>
                <Logo />
                <LogoBox/>
                <DescriptionHome />
            </HomeWrapper>
            <MenuButton />
            <InstagramButton />
        </Container>
    )
  }
//
