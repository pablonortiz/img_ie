import React from 'react';
import Styles from './styles';
import Logo from '../../../assets/images/logo.png';

const LogoHeader = () => {
  return (
    <Styles.Wrapper>
      <Styles.Logo source={Logo} />
    </Styles.Wrapper>
  );
};

export default LogoHeader;
