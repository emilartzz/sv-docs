import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} | Sitevision CMS developer documentation`}
      description="Community-driven documentation for developers working with Sitevision CMS">
    </Layout>
  );
}
