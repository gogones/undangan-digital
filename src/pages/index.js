import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import OurCustomer from 'sections/our-customer';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import KeyFeature from 'sections/key-feature';
import WorkFlow from 'sections/workflow';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Undangan Digital" />
        <Banner />
        <OurCustomer />
        <KeyFeature />
        <WorkFlow />
        <Blog />
        <Pricing />
        <Subscription />
      </Layout>
    </ThemeProvider>
  );
}
