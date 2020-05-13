import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FontTypes, FontWeights } from '../base/Fonts';
import Center from '../components/Center';
import Text from '../components/Text';
import BackgroundImage from '../assets/background-1.jpg';
import SearchBar from '../components/SearchBar';
import Space from '../components/Space';
import Spacing from '../base/Spacing';

const HomeContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 90vh;
`;

const AlignRight = styled.div`
  align-items: flex-start;
`;

class Home extends Component {
  static propTypes = {
    history: PropTypes.any,
  };

  onSearch = query => {
    const queryString = query ? `search=${query}` : '';
    this.props.history.push(`/results/?${queryString}`);
  };

  render() {
    return (
      <HomeContainer style={{ backgroundImage: "url(" + BackgroundImage + ")" }}>
        <Center>
          <AlignRight>
            <Text type={FontTypes.BigTitle} fontWeight={FontWeights.semiBold} color="#fff">
              NEVER MET A PIZZA ,
            </Text>
            <Space height={Spacing.get('2x')} display="block" />
            <Text type={FontTypes.BigTitle} fontWeight={FontWeights.semiBold} color="#fff">
              LIKE YOU BEFORE
            </Text>
            <Space height={Spacing.get('8x')} display="block" />
            <SearchBar onSearch={this.onSearch} />
          </AlignRight>
        </Center>
      </HomeContainer>
    );
  }
}

export default Home;
