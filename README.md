
## Prerequisites:
**Node.js v20 is required to build this project**
Install the latest Node.js version from https://nodejs.org/en/

## Developing/Testing locally

Install the open source depenencies (only needed on the first time you clone the repository)
```
npm install
```

To start the site locally, run the following command
```
npm run dev
```

The site can be previewed at http://localhost:8000/


## Editing

The side bar can be configured in `src/data/nav-items.yaml`
Each of the items in the side bar link to a MDX file in the `src/pages/` directory. 


## Deploying to production 

To deploy to production, run the following command

```
npm run deploy
```

The site will be available at https://pages.github.ibm.com/csm-playbook/playbook/


## Notes

The site was built using [Carbon Gatsby](https://gatsby-theme-carbon.vercel.app/getting-started) template
