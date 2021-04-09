// IMPORTS
  // -Modules

  // -Components
    import SplitRight from '../../global/globalDesktop/SplitRight'
    import TextContainer from './TextContainer'
  // -Styles
    import { brandingColors } from '../../../styles/customStyles/brandingStyles'
//



// MAIN COMPONENT
  export default function Esporadico() {
    return (
      <SplitRight rightBackgroundColor={brandingColors.menajeEsporadico}>
        <TextContainer>

            <div className="title">(CONTENIDO)</div>

            <div className="content">

              <div className="contentLine">
                Pack de contenidos audiovisuales<br/> 
                <span>(Fotografías y vídeos propios personalizados)</span>
              </div>

              <div className="contentLine">Pack de Instagram Stories</div>

              <div className="contentLine">
                Posts gráficos estáticos y animados<br/>
                <span>(Diseño gráfico digital, ilustraciones personalizadas y Motion Design)</span>
              </div> 

              <div className="contentLine">Back ups y entrega directa de material</div> 

              <div className="contentLine">TikTok y IG Reels</div>
              
            </div>

            <div className="postData">* Esta es una propuesta completa de nuestros servicios, pero puede modificarse de forma personalizada.</div>
            
        </TextContainer>
      </SplitRight>
    )
  }
//
