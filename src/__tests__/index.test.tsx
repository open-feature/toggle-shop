import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../app/page";
import { OpenFeatureTestProvider } from "@openfeature/react-sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Disable retries for testing
    },
  },
});

describe("Home", () => {
  it("renders the hero section", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <OpenFeatureTestProvider>
          <Home />
        </OpenFeatureTestProvider>
      </QueryClientProvider>
    );

    const heading = await waitFor(() => screen.getByRole("heading", { name: /ToggleShop/i }));

    expect(heading).toBeInTheDocument();
  });
});
