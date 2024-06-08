import React from 'react';
import {Header, ProductBrowser} from '../../components';

export function Home() {
  return (
    <React.Fragment>
      <Header
        logoLigth={require('../../../assets/images/logo.png')}
        logoDark={require('../../../assets/images/logo-dark.png')}
      />
      <ProductBrowser />
    </React.Fragment>
  );
}
