import { CircularProgress } from "@material-ui/core";
import styles from "./ImageGallery.module.css";

export default function Image(props) {
	return (
		<div className={styles.galleryItem}>
			{props.src ? <img
				className={styles.galleryItem}
				src={props.src}
				alt={"Image"}
			/> : <CircularProgress />}
		</div>
	);
}