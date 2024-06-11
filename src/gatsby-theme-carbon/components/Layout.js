/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';

import Meta from 'gatsby-theme-carbon/src/components/Meta';
import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import Banner from '../../components/Banner';

import 'gatsby-theme-carbon/src/styles/index.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;
  const { isSwitcherEnabled } = useMetadata();

  useEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header isSwitcherEnabled={isSwitcherEnabled} />
      <Banner />
      {isSwitcherEnabled && <Switcher />}
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
