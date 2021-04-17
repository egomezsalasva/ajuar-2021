// IMPORTS
  // -Modules
    import styled from 'styled-components'
  // -Components
    import PageTitle from '../../global/globalDesktop/PageTitle'
    import TextoImagen from './TextoImagen'
    import MenuButton from '../../global/MenuButton'
  // -Styles
    import {brandingColors, brandingFonts} from '../../../styles/customStyles/brandingStyles'
    import { breakpoints } from '../../../styles/customStyles/globalStyles'
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
    padding: ${pxToVW.vw30px};
    padding-bottom: 0px;
    font-family: ${brandingFonts.textRegular};
    font-size: 2.36111vw;
    line-height: 1.1;
    color: ${brandingColors.light};
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: ${breakpoints.laptopDesign}){
      padding: 30px;
      padding-bottom: 10px;
      font-size: 2.266rem;
    }

    .logo{
      font-family: ${brandingFonts.display};
      font-size: 3.819444vw;
      line-height: 1;
      letter-spacing: -0.8px;
      margin: 0;
      margin-top: 0.2777vw;
      @media (max-width: ${breakpoints.laptopDesign}){
        margin-top: 4px;
        font-size: 3.6666rem;
      }
    }
  `
//

// MAIN COMPONENT
  export default function NosotrosDesktop() {

    return (
      <>
        <Container>
          <TextNosotros>
            Somos un equipo creativo multidisciplinar formado por <TextoImagen bgImg="url(./assets/jorge.jpg)" portraitImg={true}>Jorge Vidal</TextoImagen>, fotógrafo, <TextoImagen bgImg="url(./assets/joan.jpg)" portraitImg={true}>Joan Hurtado</TextoImagen>, diseñador gráfico e ilustrador, y <TextoImagen bgImg="url(./assets/nerea.jpg)" portraitImg={true}>Nerea Moreno</TextoImagen>, social media manager, estilista, set designer y copy creativa.
            <br/><br/>
            Hace un año empezamos a trabajar juntos de manera orgánica, creando y gestionando contenido en redes sociales para diferentes marcas. Y es ahora cuando, después de ver los resultados de <TextoImagen bgImg="url(./assets/nuestrosTrabajos.gif)" >nuestros trabajos</TextoImagen>, creemos que ha llegado el momento de presentarnos al mundo como equipo y ayudar a más marcas y proyectos a consolidar su presencia de imagen en redes sociales.
            <br/><br/>
            Si crees que te encaja, te invitamos a un <TextoImagen bgImg="url(./assets/cafe.jpg)">café</TextoImagen> (<TextoImagen bgImg="url(./assets/lemonade.jpg)">limonada</TextoImagen>, <TextoImagen bgImg="url(./assets/bitterKas.jpg)">bitter kas</TextoImagen>, <TextoImagen bgImg="url(./assets/chai.jpg)">chai latte</TextoImagen>… lo que quieras), nos conocemos, os contamos un poco mejor, hablamos de presupuestos y que surja la magia…
            <br/><br/>
            Ojalá nos gustemos,
            <div className="logo">AJUAR</div>
          </TextNosotros>
          <PageTitle>Nosotros</PageTitle>
          <MenuButton />
        </Container>
      </>
    )
  }
// 
