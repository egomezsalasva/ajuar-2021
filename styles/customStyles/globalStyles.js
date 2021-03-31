
const zIndexes = {
    logo: "1000",
    menuButton: "1000",
    menu: "900",
}

const cursors = {
    eye: "url(./assets/eyeCursor.png) 22.5 18, auto",
    eyePointer: "url(./assets/eyeCursorPointer.png) 22.5 18, pointer",
    pen: "url(./assets/penCursor.png) 19 19, text",
    letter: "url(./assets/letterCursor.png) 22.5 22.5, pointer",
    coffee: "url(./assets/coffeeCursor.png) 22.5 22.5, pointer",
}

const breakpoints = {
    mobileDesign: "610px",
    mobileDesignHook: 610,
    tabletDesign: "1080px",
    tabletDesignHook: 1080,
    laptopDesign: "1440px",
    laptopDesignHook: 1440,
}

const pxToVW = {
    vw10px: "0.694444vw",
    vw20px: "1.388888vw",
    vw30px: "2.083333vw",
    vw40px: "2.777777vw",
    vw50px: "3.472222vw",
    vw60px: "4.166666vw",
    vw90px: "6.24vw",

    vw120px: "8.3333vw",

    vw220px: "15.2777vw",

    //MOBILE

    vwM10px: "2.41545vw",
    vwM20px: "4.8309vw",
    vwM30px: "7.24637vw",
    vwM80px: "19.3236vw",

}

const pxToVH = {

    //MOBILE
    
    vhM120px: "13.4228vh",

}



export { zIndexes, cursors, breakpoints, pxToVW, pxToVH }