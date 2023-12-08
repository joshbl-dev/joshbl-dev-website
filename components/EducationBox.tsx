import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Typography,
} from "@mui/material";
import {useTheme} from "@mui/styles";
import {Concentration, Education, Semester} from "../types/EducationInfo";

function SemesterBox(props: Semester) {
	return <Card
		variant="outlined"
		sx={{
			borderRadius: "15px",
			padding: "10px",
			textAlign: "center",
		}}
		onMouseOver={(event) => event.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)"}
		onMouseOut={(event) => event.currentTarget.style.boxShadow = "none"}
	>
		<Typography variant="h6"
					component="div">{props.year ? props.year : "8932"}</Typography>
		<CardContent>
			<Typography variant="body2"
						color="textSecondary" component="p">
				{props.term}
			</Typography>
			<Box
				component="div"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: "5px",
					justifyContent: "center",
					marginTop: "10px",
				}}
			>
				// Todo: Add other course info
				{props.courses.map((course) => (
					<Chip label={course.name} variant="outlined"
						  color="primary" />
				))}
			</Box>
		</CardContent>
	</Card>;
}

function ConcentrationChip(props: Concentration) {
	return <Chip
		label={props.name}
		variant="outlined"
		color="primary"
		clickable={props.url != ""}
		component={"a"}
		href={props.url ? props.url : ""}
	/>;
}

export function EducationBoxNew(props: Education) {
	const theme = useTheme();
	return <>
		<Box
			sx={{
				margin: "20px 0",
				borderRadius: "15px",
				border: `2px solid #ddd`,
				boxShadow: "0 3px 5px 2px rgba(125, 125, 125, .3)",
			}}
		>
			<Card sx={{
				borderRadius: "15px",
			}}>
				<CardHeader
					title={props.school}
					subheader={props.degree + " in " + props.major + "\n" + props.start_year + " - " + props.end_year}
					subheaderTypographyProps={{style: {whiteSpace: "pre-line"}}}
				/>
				<CardContent>
					<Box
						component="div"
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "10px",
							marginTop: "10px",
						}}
					>
						<Typography variant="h6"
									component="div">Concentration{props.concentrations?.length > 1 ? "s" : ""}:</Typography>
						{props.concentrations.map((data) => (
							<ConcentrationChip {...data} />
						))}
					</Box>
				</CardContent>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					margin: "20px",
				}}>
					{props.semesters.map((semester) => (
						<SemesterBox year={semester.year}
									 term={semester.term}
									 courses={semester.courses}
						/>
					))}
				</Box>
			</Card>
		</Box>
	</>;
}