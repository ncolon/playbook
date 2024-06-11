module.exports = {
  siteMetadata: {
    title: 'CSM Playbook',
    description: 'IBM playbook for Customer Success Managers (CSMs)',
    keywords: 'csm,playbook,customer,sucess',
  },
  pathPrefix: `/csm-playbook-staging/playbook`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM playbook for Customer Success Managers (CSMs)',
        icon: 'src/images/favicon.svg',
        short_name: 'CSM Playbook',
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
         theme: {
             homepage: 'white',
             interior: 'g10',
       },
      },
    },
  ],
};
