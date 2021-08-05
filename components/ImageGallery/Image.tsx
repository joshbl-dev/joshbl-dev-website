import { CircularProgress } from "@material-ui/core";
import styles from "./ImageGallery.module.css";
import { useState } from "react";
import create from "zustand";

export const useImageStore = create(() => ({
	focused: false
}));


export default function Image(props) {
	const [classList, setClassList] = useState([styles.galleryItem, styles.transformable]);
	const focused = useImageStore(state => state.focused);

	if (!focused) {
		removeFocus();
	}

	function handleClick() {
		if (classList.includes(styles.full)) {
			removeFocus();
		} else {
			console.log(focused);
			useImageStore.setState({ focused: true });
			classList.push(styles.full);
			classList.splice(classList.indexOf(styles.transformable), 1);
		}
		setClassList([...classList]);
	}

	function handleLoad() {
		setClassList([styles.galleryItem, styles.transformable]);
	}

	function removeFocus() {
		if (!classList.includes(styles.transformable)) {
			classList.push(styles.transformable);
		}
		classList.splice(classList.indexOf(styles.full), 1);
	}

	return (
		<div className={styles.galleryItem}>
			<div className={styles.content}>
				{props.src ? <img
					onClick={handleClick}
					onLoad={handleLoad}
					className={classList.join(" ")}
					src={props.src}
					alt={"Image"}
				/> : <CircularProgress />}
			</div>
		</div>
	);
}