import React from 'react';
import { ReactSVG } from 'react-svg';

import map from 'lodash/map';

import { SOCIAL_NETWORK } from './Constants';

import { pathServer } from '../../../lib/shared/constants/Strings';

const wFooterV2 = () => (
  <footer className="footer">
    <div className="content-wrapper">
      <div>
        <img
          className="icon"
          width="75px"
          height="75px"
          src={`${pathServer.PATH_IMG}company/logo.svg`}
          alt="logo"
        />
      </div>

      <div className="container-social">
        <h4>Contáctanos</h4>
        <h5> lorem </h5>
        <h5>lorem</h5>
        <h5>lorem</h5>

        <ul className="d-flex social-networks">
          {map(SOCIAL_NETWORK, ({ id, url, srcHover }) => (
            <li key={id} className="s-pr-1">
              <a className="social-icon" href={url} target="_blank" rel="noreferrer">
                <ReactSVG className=" icon-small" src={srcHover} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold"> Sobre Nosotros</li>
          <li className="font-medium"> Nosotros</li>

          <li className="font-medium"> Nuestros Locales</li>

          <li className="font-bold s-pt-2"> Servicio al Cliente</li>
          <li className="font-medium"> Comprobante electrónico</li>
          <li className="font-medium"> Derechos Arco</li>
        </ul>
      </div>
      <div className="container-options from-lg">
        <p className="s-pt-3 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rem quos nemo impedit libero
          eos fugiat dignissimos eius? Quos optio deleniti laborum explicabo accusantium possimus
          sequi temporibus rem nihil qui.
        </p>
      </div>
    </div>
  </footer>
);

wFooterV2.displayName = 'wFooterV2';

wFooterV2.defaultProps = {};

wFooterV2.propTypes = {};

export default wFooterV2;
