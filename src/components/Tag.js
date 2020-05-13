import styled from 'styled-components';

import Colors from '../base/Colors';
import Spacing from '../base/Spacing';
import { FontSizes, FontTypes, FontWeights } from '../base/Fonts';

const GreenTag = styled.label`
  border-radius: 4px;
  background: ${Colors.success};
  color: #fff;
  padding: ${Spacing.get('2x')} ${Spacing.get('2x')};
  font-size: ${FontSizes[FontTypes.Caption]};
  font-weight: ${FontWeights.light};
  line-height: ${FontSizes[FontTypes.Caption]};
`;

const RedTag = styled.label`
  border-radius: 4px;
  background: ${Colors.danger};
  color: #fff;
  padding: ${Spacing.get('2x')} ${Spacing.get('2x')};
  font-size: ${FontSizes[FontTypes.Caption]};
  font-weight: ${FontWeights.light};
  line-height: ${FontSizes[FontTypes.Caption]};
`;

export {
	GreenTag,
	RedTag
} 
