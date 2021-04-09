// IMPORTS
  // -Modules
  // -Components
    import TextContainer from './TextContainer'
    import SplitRight from '../../global/globalDesktop/SplitRight'
  // -Styles
    import { brandingColors } from '../../../styles/customStyles/brandingStyles'
//



// MAIN COMPONENT
  export default function StarterPack() {
    return (
      <SplitRight rightBackgroundColor={brandingColors.menajeStarterPack}>
        <TextContainer>
          <div className="title">(CONTENIDO)</div>
          <div className="content">
            <div className="contentLine">Análisis de marca y asesoramiento</div>
            <div className="contentLine">Diseño del look & feel</div>
            <div className="contentLine">Diseño de logo de perfil en Instagram</div>
            <div className="contentLine">Diseño de Stories personalizados</div>
            <div className="contentLine">Guidelines a medida para Instagram</div>
          </div>
        </TextContainer>
        <TextContainer>
          <div className="title">(1 MES DE CONTENIDO)</div>
          <div className="content">
            <div className="contentLine">Pack contenido audiovisuales mensual</div>
            <div className="contentLine">Fotografías y vídeos personalizados</div>
            <div className="contentLine">Pack de Instagram Stories</div>
            <div className="contentLine">Contenidos para IGTV, Reels y Tik Tok</div>
            <div className="contentLine">Post gráficos estáticos y animados</div>
            <div className="contentLine">Copys creativos para redes sociales</div>
            <div className="contentLine">Traducción de copywriting a idiomas</div>
            <div className="contentLine">Entrega de plan de contenidos mensual</div>
            <div className="contentLine">Back ups y entrega directa de material</div>
          </div>
          <div className="postData">* Esta es una propuesta completa de nuestros servicios, pero puede modificarse de forma personalizada.</div>
        </TextContainer>
      </SplitRight>
    )
  }
//
