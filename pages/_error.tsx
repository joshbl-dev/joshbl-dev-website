import PageTemplate from "../components/PageTemplate";

import { ErrorProps } from "next/error";

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default function Error({ statusCode }: ErrorProps) {
	return (
		<PageTemplate
			page={{ title: "Error", active: true, url: `${statusCode}` }}
			components={<h1>{statusCode} - Error</h1>} />);
}

