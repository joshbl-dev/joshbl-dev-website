import PageTemplate from "../components/PageTemplate";

export default function Custom404() {
	return (
		<PageTemplate page={{ title: "404", active: true, url: "/404" }}
					  components={<h1>404 - Page Not Found</h1>} />);
}