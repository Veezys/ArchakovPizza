import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#c7c7c7"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="216" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="253" rx="10" ry="10" width="277" height="66" />
    <rect x="146" y="289" rx="0" ry="0" width="16" height="1" />
    <rect x="112" y="292" rx="0" ry="0" width="28" height="1" />
    <rect x="138" y="328" rx="26" ry="26" width="138" height="46" />
    <rect x="221" y="352" rx="0" ry="0" width="12" height="11" />
    <rect x="213" y="360" rx="0" ry="0" width="1" height="1" />
    <rect x="44" y="366" rx="0" ry="0" width="1" height="2" />
    <rect x="0" y="338" rx="10" ry="10" width="86" height="35" />
    <rect x="30" y="9" rx="100" ry="100" width="204" height="196" />
  </ContentLoader>
);

export default MyLoader;
