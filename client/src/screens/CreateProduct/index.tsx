import React from 'react';
import {Header} from '../../components/Header';
import {CreateProductForm} from '../../components';

export function CreateProduct() {
  return (
    <React.Fragment>
      <Header
        logoLigth={require('../../../assets/images/logo.png')}
        logoDark={require('../../../assets/images/logo-dark.png')}
      />
      <CreateProductForm />
    </React.Fragment>
  );
}
