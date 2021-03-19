// IMPORTS
    // - Modules
        import { useRef, useState } from 'react'
import styled from 'styled-components'
    // - Components

    // - Styles
        import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
        import { cursors } from '../../../styles/customStyles/globalStyles'
//


// STYLES
    const ContactInfoContainer = styled.div`
        font-family: ${brandingFonts.textRegular};
        text-align: center;
        font-size: 30px;
        color: ${brandingColors.light};
        letter-spacing: 1.5px;
        margin-top: 30px;

        a{
          cursor: ${cursors.eyePointer};
        }

        .email{
            text-transform: uppercase;
            cursor: ${cursors.eyePointer};
        }

        .clipboardButton{
            font-family: ${brandingFonts.display};
            font-size: 15px;
            vertical-align: text-top;
            line-height: 30px;
        }
    `
//


// MAIN COMPONENT
    export default function ContactInfo() {

        const [email] = useState("casa@ajuarestudio.com")
        const [copySuccess, setCopySuccess] = useState("(Copy)")

        const copyCodeToClipboard = () => {
            navigator.clipboard.writeText(email)
            setCopySuccess("(Copied)")
        }

        return (
        <>
            <ContactInfoContainer>
                <div >AJUAR ESTUDIO</div>
                <a href="https://api.whatsapp.com/send?phone=+34607707361" target="_blank">(+34) 607 707 361</a>
                <div className="email" onClick={copyCodeToClipboard}>{email} <span className="clipboardButton">{copySuccess}</span></div>
                <a href="https://www.instagram.com/ajuarestudio/" target="_blank">@AJUARESTUDIO</a>
            </ContactInfoContainer>
        </>
        )
    }
// 