import {CustomNavbar} from "./components/navbar.jsx";
import {PresentationSection} from './components/PresentationSection.jsx';
import "./App.css"
import {FeatureSection} from "./components/FeatureSection.jsx";
import {ReviewsCustomerSection} from "./components/ReviewsCustomerSection.jsx";
import {MeetOurTeamSection} from "./components/MeetOurTeamSection.jsx";
import {IntegrationsSection} from "./components/IntegrationsSection.jsx";
import {ExitSection} from "./components/ExitSection.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
  return (
    <div className="w-full mx-auto min-h-screen">
      <CustomNavbar/>
    <PresentationSection/>
    <FeatureSection/>
      <ReviewsCustomerSection/>
      <MeetOurTeamSection/>
      <IntegrationsSection/>
      <ExitSection/>
      <Footer/>
</div>

  )
}

export default App
