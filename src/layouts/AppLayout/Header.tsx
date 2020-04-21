import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

type HeaderProps = {};

/**
 * The Header layout with the navbar, logo, ...
 */
export const Header = (props: HeaderProps) => (
  <header className={'container'}>
    <Navbar />
  </header>
);

Header.defaultProps = {};
