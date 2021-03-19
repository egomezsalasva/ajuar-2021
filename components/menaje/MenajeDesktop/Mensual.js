// IMPORTS
  // -Modules

  // -Components
    import SplitRight from '../../global/globalDesktop/SplitRight'
    import TextContainer from './TextContainer'
  // -Styles
    import { brandingColors } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
//


// MAIN COMPONENT
  export default function Mensual() {
    return (
      <SplitRight rightBackgroundColor={brandingColors.menajeMensual}>
        <TextContainer>
          <div className="title">(CONTENIDO)</div>
          <div className="content">

            <div className="contentLine">
              Pack de Contenidos Audiovisuales Mensual<br/>
              <span>(Fotografías y vídeos propios personalizados)</span>
            </div> 

            <div className="contentLine">Pack de Instagram Stories mensual</div>

            <div className="contentLine">
              Posts gráficos estáticos y animados<br/> 
              <span>(Diseño gráfico digital, ilustraciones personalizadas y Motion Design)</span>
            </div>
            
            <div className="contentLine">Contenidos para IGTV,  Reels y Tik Tok</div>
            <div className="contentLine">Textos para Blog optimizados para SEO</div>
            <div className="contentLine">Copys creativos para redes sociales</div>
            <div className="contentLine">Traducción de copywriting en inglés u otros idiomas</div>
            <div className="contentLine">Entrega de Plan de contenidos Mensual</div>
            <div className="contentLine">Entrega de KPI’S Mensual</div>
            <div className="contentLine">Servicio Community Manager y gestión de redes sociales</div>
            <div className="contentLine">Servicio de Facebook Ads y Marketing Digital</div>
            <div className="contentLine">Back ups y Entrega Directa de Material</div>
          </div>
          <div className="postData">* Esta es una propuesta completa de nuestros servicios, pero puede modificarse de forma personalizada.</div>
        </TextContainer>
      </SplitRight>
    )
  }
//
