import React from 'react';

import { link, row } from 'gatsby-theme-carbon/src/components/EditLink/EditLink.module.scss';

const EditLink = ({ relativePagePath, repository: repositoryProp }) => {

  const href = "https://github.ibm.com/csm-playbook-staging/feedback"

  return (
    <div className={`cds--row ${row}`}>
      <div className="cds--col">
        <a className={link} href={href} target='_blank' rel='noreferrer noopener'>
          Report a Playbook bug or request an enhancement
        </a>
      </div>
    </div>
  );
};

export default EditLink;
