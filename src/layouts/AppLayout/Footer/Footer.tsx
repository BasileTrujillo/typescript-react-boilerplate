import React from 'react';
import StatusBar from './StatusBar/StatusBar';

type FooterProps = {};

/**
 * The Footer layout with the statusbar (loading), lang selector, ...
 */
export const Footer = (props: FooterProps) => (
  <footer className={'container'}>
    <StatusBar />
  </footer>
);

Footer.defaultProps = {};
