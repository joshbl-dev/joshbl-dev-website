import PageTemplate from "../components/PageTemplate";

import {ErrorProps} from "next/error";
import {NextPageContext} from "next/dist/shared/lib/utils";

Error.getInitialProps = ({res, err}: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return {statusCode};
};

export default function Error({statusCode}: ErrorProps) {
	return (
		<PageTemplate
			page={{title: "Error", active: true, url: `${statusCode}`}}
			components={<h1>{statusCode} - Error</h1>} />);
}

