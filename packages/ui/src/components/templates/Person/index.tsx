import React from 'react';
import { IntlProvider } from 'react-intl';

import PageTransition from '../../atoms/PageTransition/index';
import PersonProfile from '../../organisms/PersonProfile';
import { Person } from '@typesRoots/person';

interface Props {
  person: Person;
}

const Person: React.FC<Props> = ({ person }) => {
  return (
    <PageTransition>
      <IntlProvider locale={navigator.language}>
        <PersonProfile person={person} />
      </IntlProvider>
    </PageTransition>
  );
};

export default Person;
