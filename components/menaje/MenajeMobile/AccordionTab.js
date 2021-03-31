// IMPORTS
    // - Modules
    import {useRef, useState} from 'react'
    import styled from 'styled-components'
    import gsap from 'gsap'
// - Components

// - Components
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
import { pxToVW } from '../../../styles/customStyles/globalStyles'
//


// STYLES
    const AccordionTabStyle = styled.div`

        position: relative;

        .plus{
            position: absolute;
            right: ${pxToVW.vwM10px};
            top: 30px;
            height: 20px;
            width: 20px;

            .lineHorizontal{
                position: absolute;
                width: 100%;
                height: 2px;
                background: ${brandingColors.light};
                top: 9px;
            }
            .lineVertical{
                position: absolute;
                width: 2px;
                height: 100%;
                background: ${brandingColors.light};
                left: 9px;
            }
        }

        .accordionMenu{
            height: 85px;
            padding: ${pxToVW.vwM10px} 0; 
            //padding-top: 3.6231vw;
            //padding-top: 2.23214vh;
            padding-top: 2.3vh;
            border-top: 1px solid ${brandingColors.light};
            .title{
                font-family: ${brandingFonts.display};
                color: ${brandingColors.light};
                //font-size: 47px;
                font-size: 10.7vw;
                line-height: 1;
            }
            .emoji{
                //font-size: 35px;
                font-size: 7.7vw;
                line-height: 1;
            }
        }
    `
    const AccordionContent = styled.div`
        background: ${ props => props.inputColor || brandingColors.light };
        text-align: center;
        overflow: hidden;
        height: 0;
        padding: 0 ${pxToVW.vwM10px};
        p{
            //padding: 20px 35px;
        }
    `
// 


// MAIN COMPONENT
export default function AccordionTab({menuTitle, menuEmoji, bgColor, children}) {

    const [tabOpen, setTabOpen] = useState(false)
    let tabRef = useRef()
    let tabContentRef = useRef()
    let lineVerticalRef = useRef()

    const openTabAnimation = () => {

        const tweenDuration = 0.4
        if(tabOpen === false){
            gsap.to(tabContentRef, {duration: tweenDuration, height: "auto"})
            gsap.to(lineVerticalRef, {duration: tweenDuration, rotate: 90})
            setTabOpen(true)
        } else if (tabOpen === true ){
            gsap.to(tabContentRef, {duration: tweenDuration, height: 0})
            gsap.to(lineVerticalRef, {duration: tweenDuration, rotate: 0 })
            setTabOpen(false)
        }
    }


    return (

        <AccordionTabStyle className="accordionTab" onClick={openTabAnimation} ref={el => tabRef = el}>

            <span className="plus">
                <span className="lineHorizontal" />
                <span className="lineVertical" ref={el => lineVerticalRef = el} />
            </span>

            <div className="accordionMenu">
                <span className="title">{menuTitle} </span>
                <span className="emoji">{menuEmoji}</span>
            </div>

            <AccordionContent inputColor={bgColor} ref={el => tabContentRef = el}>
                {children}
            </AccordionContent>
            
        </AccordionTabStyle>

    )
}
//
