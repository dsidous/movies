import React from 'react';
import { IntlProvider } from 'react-intl';

import { propTypes } from './propTypes';
import PageTransition from '../../atoms/PageTransition/index';
import PersonProfile from '../../organisms/PersonProfile';

const Person = ({ person }) => {
  return (
    <PageTransition>
      <IntlProvider locale={navigator.language}>
        <PersonProfile person={person} />
      </IntlProvider>
    </PageTransition>
  );
};

Person.propTypes = propTypes;

export default Person;
