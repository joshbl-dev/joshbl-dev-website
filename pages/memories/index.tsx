import styles from "../../styles/Home.module.css";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Month } from "../../types/Month";
import Message from "../../components/Message/Message";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

export default function Memories() {
	let month: Month;
	return (<>
			<div className={styles.container}>
				<h1>Sarah and Josh Gallery</h1>
				<CountdownCircleTimer isPlaying={true}
									  duration={10}
									  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000", 0.33]]}
									  onComplete={() => [true, 1000]} />
				<FormControl variant="outlined">
					<InputLabel id="monthSelectorLabel">Month</InputLabel>
					<Select
						value={""}
						displayEmpty={true}
						labelId="monthSelectorLabel"
						id="monthSelector"
						label="Month"
					>
						<MenuItem value={""}>Select Month</MenuItem>
						<MenuItem value={Month.JUN_2021}>2 Month</MenuItem>
						<MenuItem value={Month.JUL_2021}>3 Month</MenuItem>
						<MenuItem value={Month.AUG_2021}>4 Month</MenuItem>
					</Select>
				</FormControl>
				<Message />
				<ImageGallery />
			</div>
		</>
	);
}