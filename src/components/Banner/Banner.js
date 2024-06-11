import React from 'react';

import {
  banner,
  bannerText,
  bannerHeading,
} from './Banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        <strong className={bannerHeading}>
                         &nbsp;&nbsp; &nbsp;&nbsp; Search, explore, and share technical assets. &nbsp;&nbsp; &nbsp;&nbsp; <a href='https://ibm.biz/cs-tel-tal' target='_blank' rel='noreferrer noopener'>Visit the CS & TEL Technical Assets Library.</a> </strong>
      </p>

    </div>
  );
};

export default Banner;
