import "../styles/globals.css";
import {AppProps} from "next/app";
import React from "react";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";

export default function App({Component, pageProps}: AppProps) {
	return <>
		<Component {...pageProps} />
		<Analytics />
		<SpeedInsights />
	</>;
}