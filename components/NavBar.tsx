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

type NavBarProps = {
	pages: string[]
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
		return <AppBar position={"static"}>
			<Container maxWidth={"xl"}>
				<Toolbar disableGutters>
					{this.renderMobile()}
					{this.renderDesktop()}
					<Typography
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
						<MenuItem key={page}
								  onClick={this.handleCloseNavMenu}
						>
							<Typography
								textAlign="center">{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<JoshblIcon
				fontSize={"large"}
				sx={{
					flex: "auto",
					display: { xs: "flex", sm: "none" }
				}} />
		</>;
	};

	private renderDesktop = () => {
		return <>
			<JoshblIcon fontSize={"large"}
						sx={{
							display: { xs: "none", sm: "flex" },
							mr: 1
						}}
			/>

			<Box sx={{
				flexGrow: 1,
				display: { xs: "none", sm: "flex" },
				justifyContent: "center"
			}}>
				{this.props.pages.map((page) => (
					<Button
						key={page}
						onClick={this.handleCloseNavMenu}
						sx={{
							my: 2,
							color: "white",
							display: "block"
						}}
					>
						{page}
					</Button>
				))}
			</Box>
		</>;
	};
}