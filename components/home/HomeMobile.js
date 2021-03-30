// IMPORTS
  // -Modules
  import styled from 'styled-components'
  // -Components
  import Container from '../global/Container'
  import HomeWrapper from './HomeWrapper'
  import Logo from '../global/Logo'
  import DescriptionMobile from './DescriptionMobile'
  import MenuButton from '../global/MenuButton'
  import InstagramButton from '../global/globalMobile/InstagramButton'
  // -Styles
  import { pxToVW } from '../../styles/customStyles/globalStyles'
//

// MAIN COMPONENT
  const LogoBox = styled.div`
    position: absolute;
    top: ${pxToVW.vwM20px};
    left: ${pxToVW.vwM20px};
    width: 100%;
    height: 70px;
    max-width: calc(100vw - ${pxToVW.vwM20px} - ${pxToVW.vwM20px});
  `
//


// MAIN COMPONENT
  export default function HomeMobile() {
    return (
        <Container>
            <HomeWrapper>
                <Logo />
                <LogoBox/>
                <DescriptionMobile />
            </HomeWrapper>
            <MenuButton />
            <InstagramButton />
        </Container>
    )
  }
//
