// IMPORTS
    // - Modules
      import styled from 'styled-components'
    // - Components
  
    // - Styles
      import { brandingColors } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
  const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
  `
  const SplitWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: ${brandingColors.dark};
    display: flex;
    justify-content: center;
    align-items: center;
  `
//


// MAIN COMPONENT
    export default function SplitLayout({children}) {
        return (
            <Container>
                <SplitWrapper>
                    {children}
                </SplitWrapper>
            </Container>
        )
    }
// 