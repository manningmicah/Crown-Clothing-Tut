import React from 'react';

import './custom-button.styled';
import { CustomButtonContainer } from './custom-button.styled';

const CustomButton = ({ children, ...props }) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
