// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Components
    import DescriptionGif from './DescriptionGif.js'
    // - Styles
    import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
    import { breakpoints, pxToVW } from '../../styles/customStyles/globalStyles'
    //import { description } from '../../styles/customStyles/homeStyles'
// 


// STYLES
    const DescriptionContainer = styled.div`
    
        margin: ${pxToVW.vw30px} ${pxToVW.vw30px} ${pxToVW.vw20px};
        max-width: calc(100vw - ${pxToVW.vw30px} - ${pxToVW.vw30px} - ${pxToVW.vw220px});

        @media (max-width: ${breakpoints.laptopDesign}) {
            margin: 30px 30px 20px;
            max-width: calc(100vw - 30px - 30px - 220px); //full screen - margins - menuContainerSize
        } 
        @media (max-width: ${breakpoints.mobileDesign}) {
            margin: 30px 30px 120px;
            max-width: calc(100vw - 30px - 30px);
        }
    `
    const Line = styled.div`
        //font-size: 3.5rem;
        font-size: 3.64vw;
        line-height: 1.13;
        letter-spacing: 0.5px;
        color: ${brandingColors.light};
        @media (max-width: ${breakpoints.tabletDesign}) {
            font-size: 3.68vw;
            font-size: 2.4rem;
        }
        @media (max-width: ${breakpoints.mobileDesign}) {
            font-size: 2.4rem;
            line-height: 40px;
        }

        .emoji{
            //font-size: 3rem;
            font-size: 3.125vw;
            @media (max-width: ${breakpoints.tabletDesign}) {
                font-size: 3.125vw;
                font-size: 2.1rem;
            }
            @media (max-width: ${breakpoints.mobileDesign}) {
                font-size: 2.1rem;
            }
        }

        .supScript{
            font-family: ${brandingFonts.display};
            //font-size: 2rem;
            font-size: 2.083vw;
            vertical-align: text-top;
            @media (max-width: ${breakpoints.tabletDesign}) {
                //font-size: 2.083vw;
                //font-size: 1.2rem;
            }
            @media (max-width: ${breakpoints.mobileDesign}) {
                font-size: 1.2rem;
            }
        }
    `
//


// MAIN COMPONENT
    export default function DescriptionHome() {
        return (
            <DescriptionContainer>
                <Line><span className="emoji">👇🏽</span> <br/>
                SOMOS AJUAR <span className="supScript">(AJUAR)</span>,<br/>
                EL MENAJE DIGITAL <span className="emoji">🤳🏽</span> MULTIDISCIPLINAR<br/>
                QUE NECESITA TU PROYECTO <span className="emoji">🏡</span><br/>
                PARA EL SI <span className="emoji">💍</span> QUIERO DE TU CLIENTE <span className="supScript">(AMOR)</span>.</Line>
            </DescriptionContainer>
        )
    }
//