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
// Products Page Imported
import ManagementConsulting from './Routes/Products/ManagementConsulting';
import FinancialConsulting from './Routes/Products/FinancialConsulting';
import ITConsulting from './Routes/Products/IT-consulting';
import Startupincubations from './Routes/Products/Startupincubations';
import RecruitmentSolutions from './Routes/Products/RecruitmentSolutions';
import Egovernance from './Routes/Products/Egovernance';
import ComplianceAudit from './Routes/Products/Compliance&Audit';
import Cybersecurity from './Routes/Products/Cybersecurity';
import NetworkSolutionsTelecom from './Routes/Products/NetworkSolutionsTelecom';
import B2Bmarketing from './Routes/Products/B2Bmarketing';
import LeadGenerations from './Routes/Products/LeadGenerations';
import CallCenter from './Routes/Products/CallCenter';
import AppDevelopment from './Routes/Products/AppDevelopments';
import WebsiteDevelopment from './Routes/Products/WebsiteDevelopment';

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

                      {/* PROUCTS PAGE  IS ADDED HERE */}

      <Route path="/Products/ManagementConsulting" element={<ManagementConsulting/>} />
      <Route path="/Products/FinancialConsulting" element={<FinancialConsulting/>} />
      <Route path="/products/itconsulting" element={<ITConsulting/>} />
      <Route path="/products/startupincubations" element={<Startupincubations/>} />
      <Route path="/products/recruitmentsolutions" element={<RecruitmentSolutions/>} />
      <Route path="/products/egovernance" element={<Egovernance/>} />
      <Route path="/products/compliance&audit" element={<ComplianceAudit/>} />
      <Route path="/products/cybersecurity" element={<Cybersecurity/>} />
      <Route path="/products/networksolutions" element={<NetworkSolutionsTelecom/>} />
      <Route path="/products/b2bmarketing" element={<B2Bmarketing/>} />
      <Route path="/products/leadgenerations" element={<LeadGenerations/>} />
      <Route path="/products/callcenter" element={<CallCenter/>} />
      <Route path="/products/appdevelopment" element={<AppDevelopment/>} />
      <Route path="/products/websitedevelopment" element={<WebsiteDevelopment/>} />





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
