import React from "react";
import {
	AppBar,
	Container,
	Tab,
	Tabs,
	Toolbar,
	Typography
} from "@mui/material";
import JoshblIcon from "./JoshblIcon";

type NavBarProps = {
	pages: string[]
}

export class NavBar extends React.Component<NavBarProps, any> {
	render() {
		return <AppBar position={"static"}>
			<Container maxWidth={"xl"}>
				<Toolbar>
					<JoshblIcon fontSize={"large"}
								sx={{
									display: { xs: "none", md: "flex" },
									mr: 1
								}}
					/>
					<Tabs>
						{this.props.pages.map((page) => (
							<Tab
								label={page}
							/>
						))}
					</Tabs>
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
}