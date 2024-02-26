import './App.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Solutions from './Routes/Solution';
import Regulation from './Routes/Regulations';
import Services from './Routes/Services';
import News from './Routes/News';
import Contact from './Routes/Contact';

import BusinessFunding from './Routes/Solutions/Business-Funding';
import FinancialServices from './Routes/Solutions/Financial-Services';
import StartupFunding from './Routes/Solutions/Startup-Funding';
import BusinessConsulting from './Routes/Solutions/Business-Consulting';
import ITService from './Routes/Solutions/IT-Service';
import DigitalTransformation from './Routes/Solutions/Digital-Transformation';
import CloudComputing from './Routes/Solutions/Cloud-Computing';
import BigDataAnalytics from './Routes/Solutions/BigData-Analytics';
import BusinessIntelligence from './Routes/Solutions/Business-Intelligence';
import AzureCloudDataEngineering from './Routes/Solutions/AzureCloudData-Engineering';
import AWSCloudDataEngineering from './Routes/Solutions/AWSCloudData-Engineering';
import GoogleCloudandAnalytics from './Routes/Solutions/GoogleCloud-Analytics';
import AIandMLOPSservices from './Routes/Solutions/AIandMLOPS-Services';
import Epos from './Routes/Solutions/EPOS';
import PaymentGateway from './Routes/Solutions/PaymentGateway';
import DigitalMarketing from './Routes/Solutions/DigitalMarketing';
import ErpandCrm from './Routes/Solutions/Erp&CRM';
import MergersandAcquisitions from './Routes/Solutions/Mergers&Acquisitions';

import Login from '../src/Routes/Login';
import Signup from '../src/Routes/Signup';


import { Routes,Route } from 'react-router-dom';



function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<About/>} />

      <Route exact path="/solutions" element={<Solutions/>} />
      <Route path="/solutions/business-funding" element={<BusinessFunding/>} />
      <Route path="/solutions/financial-services" element={<FinancialServices/>} />
      <Route path="/solutions/startup-funding" element={<StartupFunding/>} />
      <Route path="/solutions/business-consulting" element={<BusinessConsulting/>} />
      <Route path="/solutions/it-service" element={<ITService/>} />
      <Route path="/solutions/digital-transformation" element={<DigitalTransformation/>} />
      <Route path="/solutions/digital-marketing" element={<DigitalMarketing/>} />
      <Route path="/solutions/cloud-computing" element={<CloudComputing/>} />
      <Route path="/solutions/bigData-analytics" element={<BigDataAnalytics/>} />
      <Route path="/solutions/business-intelligence" element={<BusinessIntelligence/>} />
      <Route path="/solutions/azureCloudData-Engineering" element={<AzureCloudDataEngineering/>} />
      <Route path="/solutions/awsCloudData-Engineering" element={<AWSCloudDataEngineering/>} />
      <Route path="/solutions/googleCloud-Analytics" element={<GoogleCloudandAnalytics/>} />
      <Route path="/solutions/aiandMLOPS-services" element={<AIandMLOPSservices/>} />
      <Route path="/solutions/epos" element={<Epos/>} />
      <Route path="/solutions/paymentgateway" element={<PaymentGateway/>} />
      <Route path="/solutions/erp-crm" element={<ErpandCrm/>} />
      <Route path="/solutions/Mergers-Acquisitions" element={<MergersandAcquisitions/>} />


      <Route path="/regulations" element={<Regulation/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/news-blogs" element={<News/>}/>
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="*" element={<div>Page Not Found</div>}/>

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  );
}

export default App;
