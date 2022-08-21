import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DealItem from "../components/Deal/DealItem";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { MainLayout } from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NewDeal from "../Pages/NewDeal/NewDeal";
import { fetchStatusList } from "../store/reducers/ActionCreators";
import { statusListSlice } from "../store/reducers/StatusListSlice";

export const RoutesComponent: React.FC = () => {
	const dispatch = useAppDispatch();

	const { statusList, error, isLoading } = useAppSelector(
		(state) => state.statusListReducer
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					{statusList
						.filter((status) => status.ENTITY_ID === "DEAL_STAGE")
						.map((status) => {
							return (
								<Route
									key={status.ENTITY_ID}
									path={`${status.STATUS_ID?.toLowerCase()}`}
									element={<DealItem stageId={status.STATUS_ID} />}
								/>
							);
						})}
					{/* <Route path="new" element={<NewDeal />} /> */}
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
