import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

beforeAll(() => {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: (query) => ({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
		}),
	});
	window.scrollTo = jest.fn();
});

test("renders the BraveRoom project page", () => {
	render(
		<MemoryRouter initialEntries={["/projects/braveroom"]}>
			<App />
		</MemoryRouter>
	);

	expect(
		screen.getByRole("heading", {
			name: /practice the decisions that matter/i,
			level: 1,
		})
	).toBeInTheDocument();
	expect(screen.getByText(/coming soon on github/i)).toBeInTheDocument();
	expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
	expect(
		screen.getByRole("heading", {
			name: /a persona inside the scenario/i,
			level: 2,
		})
	).toBeInTheDocument();
	expect(screen.getByText(/claude or a local ollama model/i)).toBeInTheDocument();
});
