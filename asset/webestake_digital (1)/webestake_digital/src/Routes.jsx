import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import WebDevelopmentServices from "pages/web-development-services";
import AppDevelopmentServices from "pages/app-development-services";
import ContactConsultation from "pages/contact-consultation";
import DigitalMarketingServices from "pages/digital-marketing-services";
import AboutUs from "pages/about-us";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <>
          <ScrollToTop />
          <RouterRoutes>
            {/* Define your routes here */}
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/web-development-services" element={<WebDevelopmentServices />} />
            <Route path="/app-development-services" element={<AppDevelopmentServices />} />
            <Route path="/contact-consultation" element={<ContactConsultation />} />
            <Route path="/digital-marketing-services" element={<DigitalMarketingServices />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;