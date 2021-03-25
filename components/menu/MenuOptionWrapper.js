// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Styles
    import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../styles/customStyles/globalStyles'
    import { cursors } from '../../styles/customStyles/globalStyles'
// 


// STYLES
    const MenuOptionStyle = styled.div`
        text-align: center;
        font-family: ${brandingFonts.display};
        font-size: 7.3rem;
        color: ${brandingColors.light};
        letter-spacing: -2.5px;
        @media (max-width: ${breakpoints.mobileDesign}){
            font-size: 4.7rem;
            letter-spacing: 1px;
        }

        .number{
            position: absolute;
            font-family: ${brandingFonts.textLight};
            font-size: 1.06rem;
            letter-spacing: 0px;
            padding-right: 50px;
            transform: translate(-50px, 90px);
            @media (max-width: ${breakpoints.mobileDesign}){
                display: none;
            }
        }

        .title{
            cursor: ${cursors.eyePointer};
            letter-spacing: 1px;
            &:hover{
                font-family: ${brandingFonts.displayItalic};
            }
        }

        .helperTextDesktop{
            position: absolute;
            font-family: ${brandingFonts.textLight};
            font-size: 1.06rem;
            letter-spacing: 0px;
            transform: translate(50px, 20px);
            @media (max-width: ${breakpoints.mobileDesign}){
                display: none;
            }
        }
        .helperTextMobile{
            display: none;
            @media (max-width: ${breakpoints.mobileDesign}){
                display: block;
                position: relative;
                font-family: ${brandingFonts.textLight};
                font-size: 1.06rem;
                letter-spacing: 1px;
            }
        }
    `
//


// MAIN COMPONENT
    export default function MenuOptionWrapper({children}) {
        return (
            <MenuOptionStyle>
                {children}
            </MenuOptionStyle>
        )
    }
//