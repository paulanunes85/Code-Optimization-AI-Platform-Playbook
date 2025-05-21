import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Automation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn how to implement a complete automation solution that provides visibility into your entire development lifecycle, from code creation to deployment.
      </>
    ),
  },
  {
    title: 'AI-Powered Development',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Leverage GitHub Copilot and Azure AI Foundry to implement intelligent development and problem-solving capabilities that reduce development time.
      </>
    ),
  },
  {
    title: 'Hands-On Experience',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Get practical, hands-on experience with real-world scenarios and exercises that you can apply directly to your own development environments.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className="feature-item">
      <Svg className={styles.featureSvg} role="img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features-section container">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
