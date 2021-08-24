import Header from './components/MainHeader'
import DefaultButton from './components/DefaultButton'
import screens from './assets/images/screens.svg'
import {ScreensImage } from './components/screensImage'

function App() {
  return (
    <>
      <Header />
      <div className="TextBox">
        <h1>Work at the speed of thought.</h1>
        <p>
        Most calendars are designed for teams. <br />Slate is designed for freelancers who <br />want a simple way to plan <br /> their schedule.
        </p>
      </div>

      <div className="buttonBox">
        
          <DefaultButton 
            nomeDaClasse="BlueButton" 
            link="#" 
            content="Try for free" 
          />

          <DefaultButton 
          link="#"
          content="Learn More"
          />

      </div>

      <ScreensImage>
        <img src={screens} alt="Telas do app Figmaland" />
      </ScreensImage>
    </>
  );
}

export default App;
