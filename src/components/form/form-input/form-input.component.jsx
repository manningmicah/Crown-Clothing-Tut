import React from 'react';

import { GroupContainer, Input, InputLabel } from './form-input.styled';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<GroupContainer>
		<Input onChange={handleChange} {...otherProps} />
		<InputLabel htmlFor={otherProps.id} className={`${otherProps.value.length ? 'shrink' : ''}`}>
			{label}
		</InputLabel>
	</GroupContainer>
);

export default FormInput;
