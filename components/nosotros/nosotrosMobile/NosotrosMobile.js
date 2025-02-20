// IMPORTS
// -Modules
import { useState } from "react";
import styled from "styled-components";

// -Components
import PageTitleMobile from "../../global/globalMobile/PageTitleMobile";
import MenuButton from "../../global/MenuButton";
import TextoImagenMobile from "../nosotrosMobile/TextImagenMobile";
// -Styles
import {
  brandingColors,
  brandingFonts,
} from "../../../styles/customStyles/brandingStyles";
import { pxToVW } from "../../../styles/customStyles/globalStyles";
//

// STYLES
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
`;
const TextNosotros = styled.div`
  padding: ${pxToVW.vwM20px};
  padding-bottom: ${pxToVW.vwM80px};
  font-family: ${brandingFonts.textRegular};
  //font-size: 19px;
  font-size: 4.5893vw;
  line-height: 1.105;
  color: ${brandingColors.light};
  -webkit-touch-callout: none;
  -webkit-user-select: none;

  .logo {
    font-family: ${brandingFonts.display};
    //font-size: 43px;
    font-size: 10.3864vw;
    line-height: 1;
    letter-spacing: -0.8px;
    margin: 0;
    margin-top: 4px;
  }
`;
const ImageBox = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 80vw;
  height: 67.46626vh;
  max-height: 450px;
  background: ${(props) => props.imgProp || "none"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;
//

// MAIN COMPONENT
export default function NosotrosMobile() {
  const [currentImg, setCurrentImg] = useState("none");

  const onTouchStartHandler = (bgImgArg) => {
    setCurrentImg(bgImgArg);
  };

  const onTouchEndHandler = () => {
    setCurrentImg("none");
  };

  //test deploy

  return (
    <>
      <Container>
        <ImageBox imgProp={currentImg} />

        <TextNosotros>
          Somos un equipo creativo miltidisciplinar formado por{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/jorge.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            Jorge Vidal
          </TextoImagenMobile>
          , fotógrafo,{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/joan.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            Joan Hurtado
          </TextoImagenMobile>
          , diseñador gráfico e ilustrador, y{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/nerea.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            Nerea Moreno
          </TextoImagenMobile>
          , social media manager, estilista, set designer y copy creativa.
          <br />
          <br />
          Hace un año empezamos a trabajar juntos de manera orgánica, creando y
          gestionando contenido en redes sociales para diferentes marcas. Y es
          ahora cuando después de ver los resultados de{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/nuestrosTrabajos.gif)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            nuestros trabajos
          </TextoImagenMobile>
          , creemos que ha llegado el momento de presentarnos al mundo como
          equipo y ayudar a más marcas y proyectos a consolidar su presencia de
          imagen en redes sociales.
          <br />
          <br />
          Si crees que te encaja, te invitamos a un{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/cafe.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            café
          </TextoImagenMobile>{" "}
          (
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/lemonade.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            limonada
          </TextoImagenMobile>
          ,{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/bitterKas.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            bitter kas
          </TextoImagenMobile>
          ,{" "}
          <TextoImagenMobile
            onTouchStartProp={() =>
              onTouchStartHandler("url(/assets/chai.jpg)")
            }
            onTouchEndProp={onTouchEndHandler}
          >
            chai latte
          </TextoImagenMobile>
          … lo que quieras), nos conocemos, os contamos un poco mejor, hablamos
          de presupuestos y que surja la magia…
          <br />
          <br />
          Ojalá nos gustemos,
          <div className="logo">AJUAR</div>
        </TextNosotros>

        <PageTitleMobile>Nosotros</PageTitleMobile>
        <MenuButton />
      </Container>
    </>
  );
}
//
