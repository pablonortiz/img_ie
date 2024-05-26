import React, {ReactNode} from 'react';
import Styles from './styles';
import LogoHeader from '@components/molecules/LogoHeader';

const BlankTemplate = ({children}: {children: ReactNode}) => {
  return (
    <Styles.Wrapper>
      <LogoHeader />
      {children}
    </Styles.Wrapper>
  );
};

export default BlankTemplate;
