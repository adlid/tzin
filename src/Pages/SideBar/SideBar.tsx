import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	Toolbar,
	ListItemIcon,
	ListItemText,
	Drawer,
} from "@mui/material";
import React, { useEffect } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { layoutSlice } from "../../store/reducers/LayoutSlice";
import { Link } from "react-router-dom";
import { fetchStatusList } from "../../store/reducers/ActionCreators";
import styles from "./SideBar.module.scss";
interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	drawerWidth: number;
}

interface MenuList {
	menuName: string;
	menuLink: string;
	menuIcon: any;
}

function SideBar(props: Props) {
	const { window, drawerWidth } = props;

	const dispatch = useAppDispatch();
	const { statusList, error, isLoading } = useAppSelector(
		(state) => state.statusListReducer
	);
	const { isMobileOpen } = useAppSelector((state) => state.LayoutReducer);
	const { handleDrawerToggle } = layoutSlice.actions;

	const container =
		window !== undefined ? () => window().document.body : undefined;

	useEffect(() => {
		dispatch(fetchStatusList());
	}, [dispatch]);

	const drawer = (
		<div>
			<Toolbar>
				<button
					style={{ background: "transparent", border: "none" }}
					onClick={() => dispatch(handleDrawerToggle(isMobileOpen))}
				>
					<Link to="/">
						<img
							style={{
								width: "110px",
							}}
							alt="logo"
							src={require(`../../resources/icons/bitrix.png`)}
						/>
					</Link>
				</button>
			</Toolbar>
			<Divider />
			<List>
				{statusList
					.filter((status) => status.ENTITY_ID === "DEAL_STAGE")
					.sort((a, b) => Number(a.SORT) - Number(b.SORT))
					.map((status) => (
						<Link
							style={{
								color: "#1976d2",
								textDecoration: "none",
							}}
							key={status.ID}
							to={`${status.STATUS_ID?.toLowerCase()}`}
						>
							<ListItem
								onClick={() => dispatch(handleDrawerToggle(isMobileOpen))}
								disablePadding
							>
								<ListItemButton>
									<ListItemText primary={status.NAME} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
			</List>
		</div>
	);
	return (
		<>
			<Drawer
				container={container}
				variant="temporary"
				open={isMobileOpen}
				onClose={() => dispatch(handleDrawerToggle(isMobileOpen))}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				{drawer}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
				open
			>
				{drawer}
			</Drawer>
		</>
	);
}

export default SideBar;
