import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/Seo';
import SkewedContainer from '../components/SkewedContainer';
import GlobalHeader from '../components/GlobalHeader';
import Footer from '../components/Footer';
import styles from './404.module.scss';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className={styles.layout}>
      <GlobalHeader />
      <div className={styles.contentContainer}>
        <SkewedContainer className={styles.content}>
          <h1 className={styles.header}>404</h1>
          <p>
            This page does not exist. Check the URL and try again, or{' '}
            <Link to="/">go home</Link>.
          </p>
        </SkewedContainer>
      </div>
      <Footer />
    </div>
  </>
);

export default NotFoundPage;
