import { AXIOS_INSTANCE } from "../../types/constants";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ImageCategory } from "../../types/ImageCategory";
import Image, { useImageStore } from "./Image";
import styles from "../../components/ImageGallery/ImageGallery.module.css";
import { ImageList } from "@material-ui/core";

export default function ImageGallery(props) {
	const [images, setImages] = useState([]);

	const category: ImageCategory = ImageCategory.MEMORY;
	// const [ready] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(0);

	// const [height, setHeight] = useState<number>(0);

	function updateWindowDimensions() {
		setWidth(window.innerWidth);
		// setHeight(window.innerHeight);
	}

	useEffect(() => {
		async function getImages() {
			try {
				const res: AxiosResponse = await AXIOS_INSTANCE.get("http://localhost:3001/api/assets/images", {
					params: {
						category: category
					}
				});
				return res.data;
			} catch (e) {
				console.log(e);
				return images;
			}
		}

		getImages().then(images => setImages(images));

		updateWindowDimensions();
		window.addEventListener("resize", updateWindowDimensions);
	}, []);

	function handleClick() {
		useImageStore.setState(state => ({ focused: !state.focused }));
	}

	return <ImageList variant="masonry"
					  cols={Math.floor(width / 350)} gap={12}
					  className={styles.imageGallery}
					  onClick={handleClick}
	>
		{images.map((imageInfo) => {
			return <Image key={imageInfo.id} src={imageInfo.url} />;
		})}
	</ImageList>;
}