import './App.scss';
import Header from './components/Header/Header';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import CountDownBlock from './components/CountdownBlock/CountDownBlock';
import BenefitsBlock from './components/BenefitsBlock/BenefitsBlock';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Products from './components/Products/Products';
import VideoBlock from './components/VideoBlock/VideoBlock';
import FAQBlock from './components/FAQBlock/FAQBlock';
import FormBlock from './components/FormBlock/FormBlock';
import Footer from './components/Footer/Footer';

// Time In Ms To Which The Countdown Is Made
// The Site Where You Can Convert Date To Milliseconds
// https://codechi.com/dev-tools/date-to-millisecond-calculators/

const DATE_TO_FINISH = 1697206020000;

// URL For Video

const VIDEO_URL = 'https://vimeo.com/720610860';

function App() {
  return (
    <div className="App">
      <Header/>
      <SocialMedia/>
      <WelcomeSection/>
      <CountDownBlock countdownTimeMs={DATE_TO_FINISH}/>
      <BenefitsBlock/>
      <Products/>
      <VideoBlock videoUrl={VIDEO_URL}/>
      <FAQBlock/>
      <FormBlock/>
      <Footer/>
    </div>
  );
}

export default App;
