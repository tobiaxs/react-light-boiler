import { render, screen } from "@testing-library/react";

import App from "../App";

test("renders react light boiler", () => {
	render(<App />);
	const headerElement = screen.getByText("React Light Boiler!");
	expect(headerElement).toBeInTheDocument();
});
