import React from 'react';

import { withLanding } from '../../../hocs/LandingHome';

import WMainContent from '../../organisms/wMainContent';

function Home() {
  return (
    <div className={`home `}>
      <WMainContent />
    </div>
  );
}

Home.displayName = 'Home';

Home.defaultProps = {};

Home.propTypes = {};

export default withLanding(Home);
