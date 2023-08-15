import { Box, Divider } from "@mui/material";

export const DividerLine = () => {
	return (
		<Box display={"flex"}
			 margin={"20px"}
			 justifyContent={"center"}>
			<Divider orientation={"horizontal"}
					 sx={{
						 width: "75%",
						 borderWidth: "5px",
						 borderRadius: "20px"
					 }} />
		</Box>);
};