import {
	Box,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	IconButton,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import {Theme} from "@mui/system";
import {
	Concentration,
	Course,
	Education,
	Semester,
} from "../types/EducationInfo";
import Card from "@mui/material/Card";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, {useState} from "react";
import {theme} from "../styles/theme";
import {v4 as uuidv4} from "uuid";

import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandCollapseIcon from "./ExpandCollapseIcon";

function Timeline({semesters, openSteps, setOpenSteps, isMobile}: {
	semesters: Semester[],
	openSteps: string[],
	setOpenSteps: React.Dispatch<React.SetStateAction<string[]>>,
	isMobile: boolean
}) {
	const handleExpand = (step: string) => {
		setOpenSteps((prevOpenSteps) => {
			if (!prevOpenSteps.includes(step)) {
				return [step, ...prevOpenSteps];
			} else {
				return prevOpenSteps.filter((value) => value !== step);
			}
		});
	};

	return (
		<Box
			marginLeft={"10px"}
			textAlign={"left"} width={"fit-content"}>
			<Stepper
				activeStep={-1}
				orientation="vertical">
				{semesters.map((semester) => {
					const isExpanded = openSteps.includes(semester.id);
					return (<Step
							key={semester.id}
							expanded={isMobile ? isExpanded : true}
						>
							<StepLabel
								StepIconComponent={() => <><Typography
									variant={"h5"}
									fontWeight={"bold"}>
									{semester.year + " " + semester.term}
								</Typography>
									{isMobile ? <IconButton
										onClick={() => handleExpand(semester.id)}>
										<ExpandCollapseIcon
											isExpanded={isExpanded} />
									</IconButton> : <></>}
								</>}>
							</StepLabel>
							<StepContent>
								<Box sx={
									{
										display: "flex",
										flexWrap: "wrap",
										flexDirection: "row",
										gap: "10px",
									}
								}>
									{semester.courses.map(course =>

										<CourseCard
											key={uuidv4()}
											course={course}
											isMobile={isMobile}
										/>,
									)}
								</Box>
							</StepContent>
						</Step>
					);
				})}
				<Step />
			</Stepper>
		</Box>
	);
}


function CourseCard({course, isMobile}: {course: Course, isMobile: boolean}) {
	const [isHovered, setIsHovered] = useState(false);
	return <Card
		variant="outlined"
		sx={{
			borderRadius: "15px",
			display: "flex",
			width: isMobile ? "100%" : "fit-content",
			flexDirection: "row",
			backgroundColor: theme.palette.background.default,
			boxShadow: isHovered ? "0px 5px 20px rgba(0,0,0,0.2)" : "none",
		}}
		onMouseOver={() => setIsHovered(true)}
		onMouseOut={() => setIsHovered(false)}
	>
		<CardHeader
			sx={{
				width: isMobile ? "100%" : "fit-content",
			}}
			title={<Typography
				variant={"h6"}
			>{course.name}</Typography>}
			subheader={course.course}>
		</CardHeader>
		<CardActions>
			<IconButton href={course.url} target="_blank"
						color="secondary">
				<InfoOutlinedIcon />
			</IconButton>
		</CardActions>
	</Card>;
}

function ConcentrationChip(props: Concentration) {
	return <Chip
		label={<Typography
			fontWeight={"bold"}
			style={{
				whiteSpace: "normal",
				overflow: "visible",
				textAlign: "center",
			}}
		>{props.name}</Typography>}
		variant="outlined"
		color="primary"
		clickable={props.url != ""}
		component={"a"}
		href={props.url ? props.url : ""}
	/>;
}

type educationBoxProps = {
	data: Education[]
}

export function EducationBox(props: educationBoxProps) {
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	const [education, setEducation] = React.useState<Education>(props.data[0]);
	const [openSteps, setOpenSteps] = React.useState<string[]>([]);
	return <>
		<Box
			sx={{
				borderRadius: "15px",
				border: `2px solid #ddd`,
				boxShadow: "0 3px 5px 2px rgba(125, 125, 125, .3)",
			}}
		>
			<Card sx={{
				display: "flex",
				flexDirection: "column",
				borderRadius: "15px",
			}}>
				<ToggleButtonGroup
					fullWidth={true}
					value={education.abbreviation}
					onChange={(_event, value) => {
						if (value != null && value != education.abbreviation) {
							setEducation(props.data.filter((educationNew) => educationNew.abbreviation == value)[0]);
						}
					}}
					exclusive
				>
					{props.data.map((education) => (
						<ToggleButton
							size={"large"}
							key={uuidv4()}
							value={education.abbreviation}
						>
							<Typography>{education.abbreviation}</Typography>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
				<CardHeader
					title={<Typography fontWeight={"bold"}
									   variant={"h4"}
					>
						{education.school}
					</Typography>}
					subheader={<>
						<Typography
							variant={"h5"}
						>{education.degree + " in " + education.major + "\n" + education.start_year + " - " + education.end_year}</Typography>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								gap: "10px",
								marginTop: "10px",
							}}
						>
							{education.concentrations.map((data) => (
								<ConcentrationChip key={uuidv4()} {...data} />
							))}
						</Box>
					</>}
					subheaderTypographyProps={{
						style: {
							whiteSpace: "pre-line",
						},
					}}
				/>
				<CardContent sx={{
					display: "flex",
					flexDirection: "column",
				}}>
					<Timeline semesters={education.semesters}
							  openSteps={openSteps}
							  setOpenSteps={setOpenSteps}
							  isMobile={mobile}
					/>
				</CardContent>
			</Card>
		</Box>
	</>;
}