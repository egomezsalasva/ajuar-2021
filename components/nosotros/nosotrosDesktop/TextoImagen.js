// IMPORTS
    // -Modules
        import { useEffect, useRef, useState } from 'react'
        import gsap from 'gsap'
        import styled from 'styled-components'
    // -Styles
        import { cursors } from '../../../styles/customStyles/globalStyles'
// 

// STYLES
    const TextoImagenContainer = styled.span`
        position: relative;

        span{
            text-decoration: underline;
            display: inline-block;
        }

        #wrapper{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index:2;
            cursor: ${cursors.eye};
        }

    `

    const imageWidth = "200px"
    const imageHeight = "300px"
    const ImageBox = styled.span`
        position: absolute;
        width: ${imageWidth};
        height: ${imageHeight};
        background: ${ props => props.inputBgImg || "transparent" };
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        backface-visibility: hidden;
        visibility:hidden;
        z-index:1;
        left:${ props => props.inputX || "50%" };
        top: ${ props => props.inputY || "50%" };
        margin-left: calc(-${imageWidth} / 2);
        margin-top: ${props => props.portraitImg ? 0 : "-150px" };
        transform: scale(0.1);
    `
// 


// MAIN COMPONENT
    export default function TextoImagen({children, bgImg, portraitImg }) {

        let wrapperRef = useRef()
        let circleRef = useRef()

        const mouseMoveHandler = (e) => {
            gsap.to(circleRef, { duration: 0.3,  css:{ left: e.pageX , top: e.pageY } })
        }
        const mouseOverHandler = () => {
            gsap.to(circleRef, {duration: 0.4, scale:1, autoAlpha:1 })
        }
        const mouseOutHandler = () => {
            gsap.to(circleRef, { duration: 0.4, scale:0.1, autoAlpha:0 })
        }

        //SET INITIAL POSITION
            const [rectState, setRectState] = useState({ x: 0, y: 0 })
            useEffect( () => {
                let rect = wrapperRef.getBoundingClientRect()
                setRectState({ x: `${rect.left + (rect.width /2)}px` , y: `${rect.top}px` })
            }, [])
        // 
        

        return (
            <>
                <ImageBox 
                    ref={el => circleRef = el} 
                    inputBgImg={bgImg} 
                    inputX={rectState.x} 
                    inputY={rectState.y} 
                    portraitImg={portraitImg}
                />

                <TextoImagenContainer>
                    <span>{children}</span>
                    <span id="wrapper" 
                        ref={el => wrapperRef = el}
                        onMouseOver={mouseOverHandler} 
                        onMouseOut={mouseOutHandler} 
                        onMouseMove={mouseMoveHandler} 
                    /> 
                </TextoImagenContainer>
            </>
        )
    }
// 