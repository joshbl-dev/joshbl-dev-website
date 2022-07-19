import { pages } from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";

const page = pages.filter(p => p.title == "Bio")[0];

export default function Bio() {
	return (
		<PageTemplate page={page} />
	);
};