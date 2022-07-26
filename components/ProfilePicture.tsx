import React from "react";
import styles from "../styles/Home.module.css";
import pfp from "../public/images/pfp.jpeg";
import Image from "next/image";

export default function ProfilePicture() {
	return (<Image className={styles.rounded_border}
				   src={pfp}
				   alt={"Joshbl"}
				   objectFit={"contain"} />);
}