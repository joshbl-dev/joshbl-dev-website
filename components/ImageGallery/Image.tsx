import { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./ImageGallery.module.css";

type ImageState = {
	src: string;
	classList: string[]
}


export default class Image extends Component<{ src: string }, ImageState> {
	constructor(props) {
		super(props);

		this.state = {
			src: this.props.src,
			classList: [styles.galleryItem, styles.minimize]
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
	}

	handleClick() {
		const classList = [...this.state.classList];
		if (classList.includes(styles.full)) {
			classList.splice(classList.indexOf(styles.full), 1);
		} else {
			classList.push(styles.full)
		}
		this.setState({
			classList: classList
		});
	}

	handleLoad() {
		this.setState({
			classList: [styles.galleryItem]
		});
	}

	render() {
		console.log(this.state.classList);
		return (
			this.state.src ? <img
				onClick={this.handleClick}
				onLoad={this.handleLoad}
				className={this.state.classList.join(" ")}
				src={this.state.src}
				alt={"Image"}
				loading={"lazy"} /> : <CircularProgress />
		);
	}
}
