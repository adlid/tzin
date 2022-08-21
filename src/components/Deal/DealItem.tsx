import { Card, CardContent, Typography, Box } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IDealList } from "../../models/IDealList";
import { dealListApi } from "../../services/DealListService";
import { fetchDealList } from "../../store/reducers/ActionCreators";

interface Props {
	stageId: string | null;
}

function DealItem(props: Props) {
	const { stageId } = props;
	const [deal, setDeal] = useState<IDealList>();
	useEffect(() => {
		setDeal(data?.result.filter((item) => item.STAGE_ID === stageId)[0]);
	}, [stageId]);

	const { error, isLoading, data } = dealListApi.useFetchAllDealListQuery("");

	return (
		<div>
			{isLoading && <h1>Loading page</h1>}

			{deal ? (
				<Card sx={{ minWidth: 275, maxWidth: 300 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 16 }}
							color="text.secondary"
							gutterBottom
						>
							{deal?.TITLE!}
						</Typography>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							{deal?.STAGE_ID!}
						</Typography>
						<Typography variant="h5" component="div">
							{deal?.COMMENTS!}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{dayjs(deal?.DATE_CREATE!).format('DD/MM/YYYY')}
						</Typography>
					</CardContent>
				</Card>
			) : (
				<Card sx={{ minWidth: 275, maxWidth: 300 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 16 }}
							color="text.secondary"
							gutterBottom
						>
							Упс нет данных
						</Typography>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

export default DealItem;
