// IMPORTS
    // -Modules
    import { useEffect, useRef, useState } from 'react'
    import styled from 'styled-components'
    //import Hammer from "hammerjs"
    //import Hammer from "hammerjs"
    var Hammer = require('react-hammerjs')
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
    }

`

// 


// MAIN COMPONENT
export default function TextoImagen({children, onTouchStartProp, onTouchEndProp }) {

    

    return (
        <>
            <TextoImagenContainer>
                <span>{children}</span>
                <span id="wrapper" onTouchStart={onTouchStartProp} onTouchEnd={onTouchEndProp}/> 
            </TextoImagenContainer>
        </>
    )
}
// 