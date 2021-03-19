// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Components
    import DescriptionGif from './DescriptionGif.js'
    // - Styles
    import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../styles/customStyles/globalStyles'
    //import { description } from '../../styles/customStyles/homeStyles'
// 


// STYLES
    const DescriptionContainer = styled.div`
        margin: 30px 30px 20px;
        max-width: calc(100vw - 30px - 30px - 220px); //full screen - margins - menuContainerSize
        @media (max-width: ${breakpoints.mobileDesign}) {
            margin: 30px 30px 120px;
            max-width: calc(100vw - 30px - 30px);
        }
    `
    const Line = styled.div`
        font-size: 3.5rem;
        line-height: 60px;
        letter-spacing: 0.5px;
        color: ${brandingColors.light};
        @media (max-width: ${breakpoints.mobileDesign}) {
            font-size: 2.4rem;
            line-height: 40px;
        }

        .emoji{
            font-size: 3rem;
            @media (max-width: ${breakpoints.mobileDesign}) {
                font-size: 2.1rem;
            }
        }

        .supScript{
            font-family: ${brandingFonts.display};
            font-size: 2rem;
            vertical-align: text-top;
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
                <Line><span className="emoji">👇🏽</span></Line>
                <Line>SOMOS AJUAR <span className="supScript">(AJUAR)</span>,</Line>
                <Line>EL MENAJE DIGITAL <span className="emoji">🤳🏽</span> MULTIDISCIPLINAR</Line>
                <Line>QUE NECESITA TU PROYECTO <span className="emoji">🏡</span></Line>
                <Line>PARA EL SI <span className="emoji">💍</span> QUIERO DE TU CLIENTE <span className="supScript">(AMOR)</span>.</Line>
            </DescriptionContainer>
        )
    }
//