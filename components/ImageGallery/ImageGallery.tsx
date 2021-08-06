import { AXIOS_INSTANCE } from "../../types/constants";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ImageCategory } from "../../types/ImageCategory";
import styles from "../../components/ImageGallery/ImageGallery.module.css";
import { ImageList } from "@material-ui/core";
import Image from "./Image";
import { BaseUrl } from "../../types/BaseUrl";

export default function ImageGallery(props) {
	const [images, setImages] = useState([]);

	const category: ImageCategory = ImageCategory.MEMORY;
	const [width, setWidth] = useState<number>(0);


	function updateWindowDimensions() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		async function getImages() {
			try {
				const res: AxiosResponse = await AXIOS_INSTANCE.get(BaseUrl.JOSHBL_API, {
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

	return <ImageList variant="masonry"
					  cols={Math.floor(width / 350)} gap={12}
					  className={styles.imageGallery}
	>
		{images.map((imageInfo) => {
			return <Image key={imageInfo.id} src={imageInfo.url} />;
		})}
	</ImageList>;
}