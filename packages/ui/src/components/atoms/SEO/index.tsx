import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
}

const SEO:React.FC<Props> = ({ title }) => {
  const history = useHistory();

  const subTitle = history.location.pathname !== '/' ? ` - ${title}` : null;

  const fullTitle = `Movie Search${subTitle}`;

  return <Helmet title={fullTitle} />;
};

export default SEO;
