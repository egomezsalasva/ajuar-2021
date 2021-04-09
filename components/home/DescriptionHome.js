// IMPORTS
    // - Modules
        import styled from 'styled-components'
    // - Components
    
    // - Styles
        import { brandingColors, brandingFonts } from '../../styles/customStyles/brandingStyles'
        import { breakpoints, pxToVW, pxToVH } from '../../styles/customStyles/globalStyles'
    // - Custom Hooks
// 


// STYLES
    const DescriptionContainer = styled.div`
        margin: ${pxToVW.vw30px} ${pxToVW.vw30px} ${pxToVW.vw20px};
        max-width: calc(100vw - ${pxToVW.vw30px} - ${pxToVW.vw30px} - ${pxToVW.vw220px});
        @media (max-width: ${breakpoints.laptopDesign}) {
            margin: 30px 30px 20px;
            max-width: calc(100vw - 30px - 30px - 220px); //full screen - margins - menuContainerSize
        } 
    `
    const Line = styled.div`
        font-size: 3.64vw;
        line-height: 1.13;
        letter-spacing: 0.5px;
        color: ${brandingColors.light};
        @media (max-width: ${breakpoints.laptopDesign}) {
            font-size: 3.5rem;
        }
        @media (max-width: ${breakpoints.tabletDesign}) {
            font-size: 2.4rem;
        }

        .emoji{
            font-size: 3.125vw;
            @media (max-width: ${breakpoints.laptopDesign}) {
                font-size: 3rem;
            }
            @media (max-width: ${breakpoints.tabletDesign}) {
                font-size: 2.1rem;
            }
        }

        .supScript{
            font-family: ${brandingFonts.display};
            font-size: 2.083vw;
            line-height: 3.5vw;
            vertical-align: text-top;

            @media (max-width: ${breakpoints.laptopDesign}) {
                font-size: 2rem;
            }
            @media (max-width: ${breakpoints.tabletDesign}) {
                font-size: 1.2rem;
            }
        }
    `
//


// MAIN COMPONENT
    export default function DescriptionHome() {

        //const windowWidth = useWidth()

        return (
            <DescriptionContainer>
                <Line>
                    <span className="emoji">👇🏽</span> <br/>
                    SOMOS AJUAR <span className="supScript">(AJUAR)</span>,<br/>
                    EL MENAJE DIGITAL <span className="emoji">🤳🏽</span> MULTIDISCIPLINAR<br/>
                    QUE NECESITA TU PROYECTO <span className="emoji">🏡</span><br/>
                    PARA EL "SÍ <span className="emoji">💍</span> QUIERO" DE TU CLIENTE <span className="supScript">(AMOR)</span>.
                </Line>
            </DescriptionContainer>
        )
    }
//