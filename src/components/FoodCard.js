import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Space from './Space';
import FoodItem from './FoodItem';

import Spacing from '../base/Spacing';
import Colors from '../base/Colors';
import BackgroundImage from '../assets/slice.jpeg';

const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.white};
  padding: ${Spacing.get('3x')};
  transition: all 200ms ease-in-out;
  box-shadow: none;
  height: max-content;
  border-radius: 4px;
`;

const Photo = styled.img`
  border-radius: 4px;
  width: 150px;
  height: 117px;
  object-fit: cover;
`;

const FoodCard = props => {
  const { showFoodDetails } = props;

  return (
    <CardContainer>
      <Photo style={{ backgroundImage: "url(" + BackgroundImage + ")" }} />
      <Space width={Spacing.get('6x')} />
      <FoodItem shouldTrimDesc="true" onFoodNameClick={showFoodDetails} {...props} />
    </CardContainer>
  );
};

FoodCard.propTypes = {
  showFoodDetails: PropTypes.func,
  onAddToCartClick: PropTypes.func,
};

export default FoodCard;
