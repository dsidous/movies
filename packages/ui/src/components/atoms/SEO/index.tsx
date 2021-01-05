import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import { propTypes } from './propTypes';

interface Props {
  title: string;
}

const SEO = ({ title }: Props) => {
  const history = useHistory();

  const subTitle = history.location.pathname !== '/' ? ` - ${title}` : null;

  const fullTitle = `Movie Search${subTitle}`;

  return <Helmet title={fullTitle} />;
};

SEO.propTypes = propTypes;

export default SEO;
