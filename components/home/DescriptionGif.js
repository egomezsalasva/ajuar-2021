// IMPORTS
    // - Modules
    import styled from 'styled-components'
    // - Styles
    import { brandingColors } from '../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../styles/customStyles/globalStyles'
    //import { description } from '../../styles/customStyles/homeStyles'
// 


//STYLES
    const GifContainer = styled.div`
        display: inline-block;
        height: 60px;
        @media (max-width: ${breakpoints.mobileDesign}) {
            line-height: 40px;
            transform: translateY(4px);
        }
    `
    const GifDiv = styled.div`
        display: inline-block;
        width: ${props => props.inputWidth || "0px"};
        height: 40px;
        background: ${brandingColors.light};
        @media (max-width: ${breakpoints.mobileDesign}) {
            height: 37px;
        }
    `
//


// MAIN COMPONENT
    const DescriptionGif = ({ w }) => {
        return (
            <GifContainer>
                <GifDiv inputWidth={w} />
            </GifContainer>
        )
    }
    export default DescriptionGif
// 