// IMPORTS
    // - Modules
        import styled from 'styled-components'
    // - Component
    
    // - Styles
        import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
    const ContactInfoStyle = styled.div`
        color: ${brandingColors.light};
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin: 20px;
        font-family: ${brandingFonts.textRegular};
        font-size: 22px;
        letter-spacing: 0.3px;
        line-height: 1.2;
    `
//


// MAIN COMPONENT
    export default function ContactInfo() {
        return (
            <ContactInfoStyle>
            <div >AJUAR ESTUDIO</div>
            <a href="https://api.whatsapp.com/send?phone=+34607707361" target="_blank">(+34) 607 707 361</a>
            <div>CASA@AJUARESTUDIO.COM <span className="clipboardButton" /></div>
            <a href="https://www.instagram.com/ajuarestudio/" target="_blank">@AJUARESTUDIO</a>
            </ContactInfoStyle>
        )
    }
// 