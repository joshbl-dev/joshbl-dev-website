import { pages } from "../../types/constants";
import PageTemplate from "../../components/PageTemplate";

let page = pages.filter(p => p.title == "???")[0];

export default function Mystery() {
	return (
		<PageTemplate page={page} />
	);
}