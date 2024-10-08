import React from "react";
import styles from "../styles/Home.module.css";
import pfp from "../public/images/pfp.jpeg";
import Image from "next/image";

type ProfilePictureProps = {
	width?: number,
	height?: number
}
export default function ProfilePicture(props: ProfilePictureProps) {
	return (<Image className={styles.rounded_border}
				   src={pfp}
				   alt={"Profile Picture"}
				   sizes="100vw"
				   style={{
					   width: "auto",
					   height: props.height,
				   }}
	/>);
}