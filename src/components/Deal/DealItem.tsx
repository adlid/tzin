import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IDealList } from "../../models/IDealList";
import { dealListApi } from "../../services/DealListService";
import { fetchDealList } from "../../store/reducers/ActionCreators";

interface Props {
	stageId: string;
}

function DealItem(props: Props) {
	const { stageId } = props;
	// const dispatch = useAppDispatch();
	// const { dealList, isLoading, error } = useAppSelector(
	// 	(state) => state.dealListReducer
	// );

	// useEffect(() => {
	// 	dispatch(fetchDealList());
	// }, [dispatch]);
	const { error, isLoading, data } = dealListApi.useFetchAllDealListQuery("");

	return (
		<div>
			{isLoading && <h1>Loading page</h1>}
			{data?.result.filter((item) => item.STAGE_ID === stageId)[0].ID}
		</div>
	);
}

export default DealItem;
