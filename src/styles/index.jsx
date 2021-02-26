import React from 'react';

import CommonStyles from './common';
import LightStyles from './light';
import DarkStyles from './dark';

const GlobalStyles = ({ darkmode }) => (
	<>
		{darkmode && <DarkStyles />}
		<LightStyles />
		<CommonStyles />
	</>
);

export default GlobalStyles;
