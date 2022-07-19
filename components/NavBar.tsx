import React from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography
} from "@mui/material";
import JoshblIcon from "./JoshblIcon";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/Home.module.css";
import { PageInfo } from "../types/page";


type NavBarProps = {
	pages: PageInfo[]
}

export class NavBar extends React.Component<NavBarProps, any> {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null
		};
	}

	handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		this.setState({
			anchorEl: event.currentTarget
		});
	};

	handleCloseNavMenu = () => {
		this.setState({
			anchorEl: null
		});
	};


	render() {
		return <AppBar position={"static"} sx={{ mb: 2 }}>
			<Container maxWidth={"xl"}>
				<Toolbar disableGutters>
					{this.renderMobile()}
					{this.renderDesktop()}
					<Typography
						color={"#7ee6f2"}
						variant={"h6"}
						noWrap
						component={"a"}
						href="/"
					>
						Joshbl
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>;
	}

	private renderMobile = () => {
		return <>
			<Box sx={{
				flexBasis: "auto",
				display: { xs: "flex", sm: "none" }
			}}>
				<IconButton
					size="large"
					onClick={this.handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={this.state.anchorEl}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left"
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "left"
					}}
					open={Boolean(this.state.anchorEl)}
					onClose={this.handleCloseNavMenu}
					sx={{
						display: { xs: "block", sm: "none" }
					}}
				>
					{this.props.pages.map((page) => (
						<MenuItem key={page.title}
								  component={"a"}
								  onClick={this.handleCloseNavMenu}
								  href={`${page.url}`}
						>
							<Typography
								textAlign="center">{page.title}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<JoshblIcon
				fontSize={"large"}
				sx={{
					color: "#7ee6f2",
					flex: "auto",
					display: { xs: "flex", sm: "none" }
				}} />
		</>;
	};

	private renderDesktop = () => {
		return <>
			<JoshblIcon fontSize={"large"}
						sx={{
							color: "#7ee6f2",
							display: { xs: "none", sm: "flex" },
							mr: 1
						}}
			/>

			<Box sx={{
				flexGrow: 1,
				display: { xs: "none", sm: "flex" },
				justifyContent: "center",
				textAlign: "center"
			}}>
				{this.props.pages.map((page) => (
					<Button
						variant={"text"}
						key={page.title}
						onClick={this.handleCloseNavMenu}
						className={styles.border}
						href={`${page.url}`}
						sx={{
							my: 2,
							display: "block",
							margin: "0rem 1rem"
						}}
					>
						{page.title}
					</Button>
				))}
			</Box>
		</>;
	};
}