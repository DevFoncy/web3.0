/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len, react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';

import { pathServer } from '../../lib/shared/constants/Strings';
import { COMPANY_SEO } from '../../lib/util/Company';

function Header({ staticPage, children, title }) {
  // const mainUrl = split(router.asPath, '?');
  // const urlPath = PREFIX_META !== '/' ? replace(head(mainUrl), PREFIX_META, '') : head(mainUrl);
  // const urlCanonical = `${DOMAIN}${urlPath}`;

  let staticPageName = '';
  let staticPageDescription = '';
  let staticPageName2 = '';

  if (staticPage) {
    // aca
    staticPageName = COMPANY_SEO.headerTitle;
    staticPageDescription = COMPANY_SEO.description;
    staticPageName2 = title || '';
  }

  return (
    <Head>
      {staticPage && (
        <>
          <title>{`${staticPageName} | ${staticPageName2}`}</title>
          <meta name="description" content={staticPageDescription} />
          <meta name="robots" content="index, follow" key="robots" />

          <meta property="og:title" name="og:title" content={staticPageName} />
          <meta property="og:description" content={staticPageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={staticPageName} />
          <meta name="twitter:description" content={staticPageDescription} />

          <link rel="apple-touch-icon" href={`${pathServer.PATH_FAVICON}apple-touch-icon.png`} />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${pathServer.PATH_FAVICON}favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${pathServer.PATH_FAVICON}favicon-16x16.png`}
          />

          <link rel="icon" type="image/png" href={`${pathServer.PATH_FAVICON}favicon.ico`} />

          {/* <link rel="manifest" href={`${pathServer.PATH_FAVICON}manifest.json`} /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content={`${pathServer.PATH_FAVICON}ms-icon-144x144.png`}
          />
          <meta name="theme-color" content="#ffffff" />

          {/* <meta property="og:url" content={urlCanonical}/> */}
        </>
      )}
      //TODO Tech Debt
      {/* <link rel="preload" href={buildUrlWithPrefix('/static/poppins.ttf')} as="font" type="font/ttf" crossOrigin="anonymous"/> */}
      {children}
    </Head>
  );
}

Header.propTypes = {
  children: PropTypes.element,
  staticPage: PropTypes.shape({}),
  title: PropTypes.string,
};

Header.defaultProps = {
  staticPage: null,
};

export default withRouter(Header);
