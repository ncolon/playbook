import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
        Latest build: {buildTime}
    </p>

  </>
);

const links = {
  firstCol: [
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/sustainability-software-community', linkText: 'Sustainability Software community' },
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/automation-platform-community', linkText: 'Automation platform community' },
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/data-and-ai-community', linkText: 'Data and AI community' },
  ],
  secondCol: [
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/public-cloud-community', linkText: 'Public cloud community' },
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/security-platform-community', linkText: 'Security platform community'},
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/red-hat-openshift-community', linkText: 'Red Hat OpenShift community' },
    { href: 'https://w3.ibm.com/w3publisher/customersuccess/get-connected/ibm-z-a-ps-and-kyndryl-community', linkText: 'zSW and Kyndryl community' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
