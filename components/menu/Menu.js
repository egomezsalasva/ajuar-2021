// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Components
    import Logo from '../global/Logo'
    import MenuList from './MenuList'
    // - Styles
    import { brandingColors } from '../../styles/customStyles/brandingStyles'
    import { zIndexes } from '../../styles/customStyles/globalStyles'
// 


// STYLES
    const MenuContainer = styled.div`
        //display: ${props => props.active ? "flex" : "none"};
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        width: 100vw;
        height: 100vh;
        transform: translateY(-100%);
        z-index: ${zIndexes.menu};
        background: ${brandingColors.dark};
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; 
    `
//


// MAIN COMPONENT
    export default function Menu({ menuActive, forwardRef }) {

        return (
            <MenuContainer active={menuActive} ref={forwardRef}>
                <Logo/>
                <MenuList/>
            </MenuContainer>
        )
    }
//