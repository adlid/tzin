import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { MainLayout } from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NewDeal from "../Pages/NewDeal/NewDeal";

export const RoutesComponent: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="new" element={<NewDeal />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
