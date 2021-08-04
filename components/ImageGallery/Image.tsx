import { Component } from "react";
import { CircularProgress } from "@material-ui/core";

type ImageState = {
	src: string;
	classList: string
}


export default class Image extends Component<{ src: string, style }, ImageState> {
	constructor(props) {
		super(props);

		this.state = {
			src: this.props.src,
			classList: `${this.props.style} minimize`
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleLoad = this.handleLoad.bind(this)
	}

	handleClick() {
		this.setState({
			classList: `${this.props.style} full`
		})
	}

	handleLoad() {
		this.setState({
			classList: this.props.style
		})
	}

	render() {
		return (
			this.state.src ? <img
				onClick={this.handleClick}
				onLoad={this.handleLoad}
				className={this.state.classList}
				src={this.state.src}
				alt={"Image"}
				loading={"lazy"}/> : <CircularProgress />
		);
	}
}
