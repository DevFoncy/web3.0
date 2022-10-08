import React from 'react';
import { pathServer } from '../../../lib/shared/constants/Strings';

const INFORMATION_BANNER = [
  { id: 1, title: 'lorem lorem lorem', img: 'ic_moto.png' },
  { id: 2, title: 'lorem lorem lorem ', img: 'ic_pizza.png' },
  { id: 3, title: 'lorem lorem lorem  ', img: 'pan-ajo.png' },
];

const wBannerTitle = () => (
  <div className="Banner-title from-lg">
    {INFORMATION_BANNER.map((info) => (
      <div key={info.id}>
        <img
          width={40}
          src={`${pathServer.PATH_IMG}company/${info.img}`}
          className="from-lg"
          alt="promociones"
          data-id={info.id}
        />
        <p className="font-bold">{info.title} </p>
      </div>
    ))}
  </div>
);

wBannerTitle.displayName = 'wBannerTitle';

wBannerTitle.defaultProps = {};

wBannerTitle.propTypes = {};

export default wBannerTitle;
