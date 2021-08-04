import { useAppStore } from "../../zustand/appStore";
import { Image } from "../../types/Image";
import { axiox } from "../../types/constants";
import { AxiosResponse } from "axios";
import styles from "./ImageGallery.module.css"


export async function getImages() {
	const res: AxiosResponse = await axiox.get("assets/images", {
		params: {
			offset: 35,
			amount: 1
		}
	});
	const images: Image[] = res.data;
	const addImages = useAppStore(state => state.addImages);
	addImages(images);
	console.log(images);
}

export function ImageGallery() {
	getImages()
	const image = useAppStore(state => state.images)[0];
	return <img src={image.url} alt={"Image"} />;

}