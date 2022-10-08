import React, { useContext, useEffect } from 'react';
import WHome from '../src/components/templates/Home';
import Header from '../src/containers/Head';

import { ShoppingContext } from '../src/context/ShoppingProvider';
import WSpinner from '../src/components/molecules/wSpinner';

export default function HomePage({ props }) {
  const { loading, setLoading } = useContext(ShoppingContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header staticPage={{ show: true }} title="Lorem Lorem Lorem" />
      {loading ? <WSpinner /> : <WHome {...props} />}
    </>
  );
}

export const getServerSideProps = async () => ({
  props: {},
});
