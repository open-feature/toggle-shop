.PHONY: generate-flags check-openfeature-cli

generate-flags: check-openfeature-cli
	openfeature generate react
	openfeature generate nodejs
	@echo "Flags generated."

check-openfeature-cli:
	@if ! command -v openfeature >/dev/null 2>&1; then \
		echo "Error: OpenFeature CLI not available"; \
		echo "Please install OpenFeature CLI: https://github.com/open-feature/cli#installation"; \
		exit 1; \
	fi

run-load-gen:
	docker run --network="host" --rm -i grafana/k6 run --vus 25 --duration 30m - <k6/products.js