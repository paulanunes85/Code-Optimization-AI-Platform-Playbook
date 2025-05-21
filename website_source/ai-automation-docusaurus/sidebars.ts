import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'prerequisites', 'setup'],
    },
    {
      type: 'category',
      label: 'Automation Workflows',
      items: ['module1'],
    },
    {
      type: 'category',
      label: 'Security and Governance',
      items: ['security-integration', 'enterprise-governance'],
    },
    {
      type: 'category',
      label: 'Metrics and Monitoring',
      items: ['metrics'],
    },
    {
      type: 'category',
      label: 'Implementation Roadmap',
      items: ['implementation-roadmap'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting'],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: ['resources'],
    },
  ],
};

export default sidebars;
