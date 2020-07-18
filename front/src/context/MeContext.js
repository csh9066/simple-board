import React, { createContext, useState } from 'react';

const MeContext = createContext();

export const MeProvider = ({ children }) => {
	const [me, setMe] = useState(null);

	const initialValue = {
		me,
		setMe,
	};

	return (
		<MeContext.Provider value={initialValue}>{children}</MeContext.Provider>
	);
};

export default MeContext;
