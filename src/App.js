import Header from './components/MainHeader'
import DefaultButton from './components/DefaultButton'
import screens from './assets/images/screens.svg'
import icon1 from './assets/images/icon_1.svg'
import icon2 from './assets/images/icon_2.svg'
import icon3 from './assets/images/icon_3.svg'
import { ScreensImage } from './components/screensImage'
import TextBox from './components/TextBox'
import FeaturesTemplate from './components/FeaturesTemplate'
import WhiteCard from './components/WhiteCard'
import computer from './assets/images/computer.svg'
import boardsNotifications from './assets/images/boardsNotifications.svg'
import GalleryWrapper from './components/GalleryWrapper'
import PartnersWrapper from './components/PartnersWrapper'
import TestimonialsCard from './components/TestimonialsCard'
import wadeAvatar from './assets/images/wadeAvatar.png'
import philipAvatar from './assets/images/philipAvatar.png'
import arthurAvatar from './assets/images/arthurAvatar.png'
import reginaAvatar from './assets/images/reginaAvatar.png'
import LineChartSection from './components/LineChartSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <section>

        <TextBox title="Work at the speed of thought" text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule." />
          
        <div className="buttonBox">
            <DefaultButton nomeDaClasse="BlueButton" link="#" content="Try for free" />

            <DefaultButton link="#" content="Learn More" />
        </div>

        <ScreensImage>
          <img src={screens} alt="Telas do app Figmaland" />
        </ScreensImage>

      </section>

      <section>

        <TextBox title="Features" text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."/>

        <div className="featuresBox">
          <div className="framesBox"></div>

          <div>
              <FeaturesTemplate image={icon1} title="A single source of truth" subtitle="When you add work to your Slate calendar we automatically calculate useful insights" />
              <FeaturesTemplate image={icon2} title="Intuitive interface" subtitle="When you add work to your Slate calendar we automatically calculate useful insights" />
              <FeaturesTemplate image={icon3} title="Or with rules" subtitle="When you add work to your Slate calendar we automatically calculate useful insights" />
          </div>
           
           
        </div>

      </section>

      <section>

        <TextBox title="Contents" text="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
        <div className="whiteCardBox">
          <WhiteCard 
            title="Work" 
            subtitle="Ever wondered if you're too reliant on a client for work? Slate helps you identify." 
            link="#" 
            content="Sign Up" 
            image={computer} 
            altText="a Image of a computer"
          />
          <WhiteCard 
            title="Design with real data" 
            subtitle="Ever wondered if you're too reliant on a client for work? Slate helps you identify." 
            link="#" 
            content="Try for free" 
            image={boardsNotifications} 
            altText="a image of the app" 
          />
        </div>
      </section>

      <section>
        <TextBox title="Gallery" text="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
        <GalleryWrapper />
      </section>

      <section>
        <TextBox title="Partners" text="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
        <PartnersWrapper />
      </section>

      <section>
        <TextBox title="Testimonials" />
        <div className="testimonialsBox">
          <div className="userContainer1">
            <TestimonialsCard image={wadeAvatar} userName="Wade Steward" work="Designer" testimonial="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year." />
            <TestimonialsCard image={philipAvatar} userName="Philip Watson" work="Designer" testimonial="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year." />
          </div>
          <div className="userContainer2">
            <TestimonialsCard image={arthurAvatar} userName="Arthur Wilson" work="Designer" testimonial="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year." />
            <TestimonialsCard image={reginaAvatar} userName="Regina Black" work="Designer" testimonial="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year." />  
          </div>
        </div>
      </section>

      <LineChartSection />

      <Footer />

    </>
  );
}

export default App;
