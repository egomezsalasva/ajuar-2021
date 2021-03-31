// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Components
    import PageTitleMobile from '../../global/globalMobile/PageTitleMobile'
    import MenuButton from '../../global/MenuButton'
  // -Styles
    import {brandingColors, brandingFonts} from '../../../styles/customStyles/brandingStyles'
import { pxToVW } from '../../../styles/customStyles/globalStyles'
//

// STYLES
  const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-content: space-between;
    justify-content: center;
    flex-wrap: wrap;
  `
  const TextNosotros = styled.div`
    padding: ${pxToVW.vwM20px};
    padding-bottom: ${pxToVW.vwM80px};
    font-family: ${brandingFonts.textRegular};
    //font-size: 19px;
    font-size: 4.5893vw;
    line-height: 1.105;
    color: ${brandingColors.light};

    .logo{
      font-family: ${brandingFonts.display};
      //font-size: 43px;
      font-size: 10.3864vw;
      line-height: 1;
      letter-spacing: -0.8px;
      margin: 0;
      margin-top: 4px;
    }
  `
  const Underlined = styled.span`
    text-decoration: underline;
    display: inline-block;
  `
//

// MAIN COMPONENT
  export default function NosotrosMobile() {

    return (
      <>
        <Container>
          <TextNosotros>
            Somos un equipo creativo miltidisciplinar formado por <Underlined>Jorge Vidal</Underlined>, fotógrafo, <Underlined>Joan Hurtado</Underlined>, diseñador gráfico e ilustrador, y <Underlined>Nerea Moreno</Underlined>, social media manager, estilista, set designer y copy creativa.
            <br/><br/>
            Hace un año empezamos a trabajar juntos de manera orgánica, creando y gestionando contenido en redes sociales para diferentes marcas que necesitan crear contenido. Y es ahora cuando después de ver los resultados de <Underlined bgImg="url(./assets/nuestrosTrabajos.gif)" >nuestros trabajos</Underlined>, creemos que ha llegado el momento de presentarnos al mundo como equipo y ayudar a más marcas y proyectos a consolidar su presencia de imagen en redes sociales.
            <br/><br/>
            Si crees que te encaja, te invitamos a un <Underlined>café</Underlined> (<Underlined>limonada</Underlined>, <Underlined>bitter kas</Underlined>, <Underlined>chai latte</Underlined>… lo que quieras), nos conocemos, os contamos un poco mejor, hablamos de presupuestos y que surja la magia…
            <br/><br/>
            Ojalá nos gustemos,
            <div className="logo">AJUAR</div>
          </TextNosotros>
          <PageTitleMobile>Nosotros</PageTitleMobile>
          <MenuButton />
        </Container>
      </>
    )
  }
// 
