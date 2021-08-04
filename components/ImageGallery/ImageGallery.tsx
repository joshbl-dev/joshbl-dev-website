import { AXIOS_INSTANCE } from "../../types/constants";
import { AxiosResponse } from "axios";
import { Component } from "react";
import { ImageCategory } from "../../types/ImageCategory";
import Image from "./Image";
import { ImageInfo } from "../../types/ImageInfo";
import { ImageList } from "@material-ui/core";

type ImageGalleryState = {
	ready: boolean;
	width: number;
	height: number;
}

export default class ImageGallery extends Component<{}, ImageGalleryState> {
	private images: ImageInfo[] = [];

	constructor(props) {
		super(props);
		this.state = {
			ready: false, width: 0, height: 0
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	async getImages(category: ImageCategory): Promise<ImageInfo[]> {
		try {
			const res: AxiosResponse = await AXIOS_INSTANCE.get("http://localhost:3001/api/assets/images", {
				params: {
					category: category
				}
			});
			return res.data;
		} catch (e) {
			console.log(e);
			return this.images;
		}
	}

	async componentDidMount() {
		this.images = await this.getImages(ImageCategory.MEMORY);
		this.setState({
			ready: true
		});

		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	render() {
		return <ImageList variant="masonry"
						  cols={Math.floor(this.state.width / 350)} gap={12}>
			{this.images.map((imageInfo) => {
				return <Image key={imageInfo.id} src={imageInfo.url} />;
			})}
		</ImageList>;
	}

}