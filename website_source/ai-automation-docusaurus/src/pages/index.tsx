import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturedWorkshops() {
  return (
    <div className="container margin-top--lg">
      <div className="row">
        <div className="col col--12">
          <div className="section-title">
            <h2>Featured Workshops</h2>
            <p className="section-subtitle">
              Explore our hands-on workshops designed to help you master AI-powered automation and development optimization
            </p>
          </div>
        </div>
      </div>
      <div className="featured-workshops">
        <div className="workshop-card">
          <h3>Setting Up Integrated Automation</h3>
          <p>
            Learn how to configure a comprehensive automation solution that integrates GitHub Agent, GitHub Copilot, and Azure AI Foundry for your development environment.
          </p>
          <div className="margin-top--md">
            <Link className="button button--primary button--sm" to="/docs/module1">
              Learn More
            </Link>
          </div>
        </div>
        <div className="workshop-card">
          <h3>Security and Governance</h3>
          <p>
            Build on the automation foundation with security integration and enterprise governance for your AI-powered development environment.
          </p>
          <div className="margin-top--md">
            <Link className="button button--primary button--sm" to="/docs/security-integration">
              Learn More
            </Link>
          </div>
        </div>
        <div className="workshop-card">
          <h3>Metrics and Monitoring</h3>
          <p>
            Discover how to implement comprehensive metrics and monitoring for your AI automation workflows to measure impact and ROI.
          </p>
          <div className="margin-top--md">
            <Link className="button button--primary button--sm" to="/docs/metrics">
              Learn More
            </Link>
          </div>
        </div>
        <div className="workshop-card">
          <h3>Implementation Roadmap</h3>
          <p>
            Explore a phased approach to implementing AI automation in your organization, from initial pilot to enterprise-scale deployment.
          </p>
          <div className="margin-top--md">
            <Link className="button button--primary button--sm" to="/docs/implementation-roadmap">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwoColumnSection() {
  return (
    <div className="container margin-top--xl margin-bottom--xl">
      <div className="row">
        <div className="col col--6">
          <h2>Why AI Automation?</h2>
          <p>
            Modern development workflows require sophisticated automation and AI assistance to ensure code quality, performance, and security. GitHub and Azure provide a comprehensive set of tools and services for implementing AI-powered automation across your entire development lifecycle.
          </p>
          <p>
            This workshop series teaches you how to leverage GitHub Agent, GitHub Copilot, GitHub Code Agent, and Azure AI Foundry to implement a complete automation solution that enables proactive monitoring, automated security remediation, and AI-assisted problem solving.
          </p>
        </div>
        <div className="col col--6">
          <h2>Workshop Formats</h2>
          <p>Our workshops are available in multiple formats to accommodate different time constraints and audience needs:</p>
          <ul>
            <li><strong>Essential (90 minutes):</strong> Core concepts and basic implementation</li>
            <li><strong>Standard (2 hours):</strong> Complete implementation with all key scenarios</li>
            <li><strong>Extended (3+ hours):</strong> Advanced scenarios and team-based exercises</li>
          </ul>
          <p>
            Check the <Link to="/docs/intro">Workshop Overview</Link> for more details on each format.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Intelligent Development: Performance Optimization, Security Enhancement, and Code Quality with GitHub Agent, GitHub Copilot, GitHub Code Agent, and Azure AI Foundry">
      <HomepageHeader />
      <main>
        <FeaturedWorkshops />
        <TwoColumnSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
