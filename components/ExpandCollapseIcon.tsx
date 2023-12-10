import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {ChevronRight} from "@mui/icons-material";

export default function ExpandCollapseIcon({isExpanded}: {
	isExpanded: boolean
}) {
	return isExpanded ? <ExpandMoreIcon /> : <ChevronRight />;
}