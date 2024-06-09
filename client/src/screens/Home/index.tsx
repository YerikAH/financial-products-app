import {PageLayout} from '../../components/shared';
import {ProductAddButton, ProductBrowser} from '../../components/Home';
import {useInitialize} from '../../hooks/useInitialize';
import {useEffect} from 'react';

export function Home() {
  const initialize = useInitialize();

  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <PageLayout>
        <ProductBrowser />
      </PageLayout>
      <ProductAddButton />
    </>
  );
}
