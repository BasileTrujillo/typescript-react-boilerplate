import React, { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

type AppLayoutProps = {
  children: ReactNode;
};

/**
 * The AppLayout layout is the main app layout
 */
export const AppLayout = (props: AppLayoutProps) => (
  <div className={'app-layout'}>
    <Header />
    <section className={'app-content'}>{props.children}</section>
    <Footer />
  </div>
);

AppLayout.defaultProps = {};
