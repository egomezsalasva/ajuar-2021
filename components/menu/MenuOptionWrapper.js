// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Styles
    import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
    import { breakpoints, pxToVW } from '../../styles/customStyles/globalStyles'
    import { cursors } from '../../styles/customStyles/globalStyles'
// 


// STYLES
    const MenuOptionStyle = styled.div`
        text-align: center;
        color: ${brandingColors.light};

        .number{
            position: absolute;
            font-family: ${brandingFonts.textRegularItalic};
            font-size: 1.1111vw;
            padding-right: ${pxToVW.vw50px};
            transform: translate(-${pxToVW.vw50px}, ${pxToVW.vw60px});
            @media (max-width: ${breakpoints.laptopDesign}){
                font-size: 1.06rem;
                padding-right: 50px;
                transform: translate(-50px, 60px);
            }
            @media (max-width: ${breakpoints.mobileDesign}){
                display: none;
            }
        }

        .title{
            font-family: ${brandingFonts.display};
            font-size: 7.6388vw;
            cursor: ${cursors.eyePointer};
            &:hover{
                font-family: ${brandingFonts.displayItalic};
            }
            @media (max-width: ${breakpoints.laptopDesign}){
                font-size: 7.3rem;
            }
            @media (max-width: ${breakpoints.mobileDesign}){
                font-size: 4.7rem;
                letter-spacing: 1px;
            }
        }

        .helperTextDesktop{
            position: absolute;
            font-family: ${brandingFonts.textRegularItalic};
            font-size: 1.1111vw;
            transform: translate(${pxToVW.vw50px}, ${pxToVW.vw20px});
            @media (max-width: ${breakpoints.laptopDesign}){
                font-size: 1.06rem;
                transform: translate(50px, 20px);
            }
            @media (max-width: ${breakpoints.mobileDesign}){
                display: none;
            }
        }
        .helperTextMobile{
            display: none;
            @media (max-width: ${breakpoints.mobileDesign}){
                display: block;
                position: relative;
                font-family: ${brandingFonts.textRegularItalic};
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