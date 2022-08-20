import React from "react";
import { useEffect } from "react";

import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchStatusList } from "./store/reducers/ActionCreators";

function App() {
	const dispatch = useAppDispatch();
	const { statusList, isLoading, error } = useAppSelector(
		(state) => state.statusListReducer
	);

	useEffect(() => {
		dispatch(fetchStatusList());
		console.log(statusList);
	}, []);

	return (
		<div className="App">
			{statusList.map((status) => {
				return status.NAME;
			})}
		</div>
	);
}

export default App;
