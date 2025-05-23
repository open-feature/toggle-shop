# Welcome to ToggleShop

This is a silly e-commerce demo app called ToggleShop.
The purpose of the demo is to experiment with new OpenFeature functionality in an app that mimics real-world use cases.

![ToggleShop screenshot](./public/img/screenshot.png)

## Getting Started

The demo app is completely self-contained but can be configured to send telemetry to an [OTLP](https://opentelemetry.io/docs/specs/otel/protocol/) compatible endpoint.

Follow these steps to get up and running:

1. install dependencies: `npm install`
2. configure OTLP export (optional):
   1. copy env: `cp .env.example .env.local`
   2. update `.env.local` with OTLP information
3. start the app: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Feature Flags

ToggleShop leverages a number of feature flags for various technical and business-related use cases.

| Feature Flag        | Type    | Default Variant | Variants |
| ------------------- | ------- | --------------- | -------- |
| offer-free-shipping | boolean | on              | on, off  |
| sticky-header       | boolean | off             | on, off  |
| use-distributed-db  | boolean | off             | on, off  |
| use-secure-protocol | boolean | off             | on, off  |

> The flag configuration for local development can be found [here](./flags.json).

### Free Shipping

The `offer-free-shipping` flag controls a banner on the landing page that teases free shipping on orders over $50.
The flag is also used on the checkout page to calculate the total cost.
The purpose of this flag is to demo using a client-side feature flag with the React SDK.
It also pairs nicely with the event tracking to calculate the business impact.

Use the [Selenium IDE project](./selenium/toggle-shop-user-simulation-selenium-ide.side) to simulate user purchases for telemetry data analysis demo purposes.

### Distributed DB

The `use-distributed-db` flag controls which database is used to fetch the list of products.
The databases themselves are mocked for simplicity and have the following characteristics.
The SQLite database offers low latency but do not support concurrent access.
The Postgres database is the inverse.
It offers slightly higher latency but supports concurrent requests.

### Secure Protocol

The `use-secure-protocol` flag is only evaluated when `use-distributed-db` is set to `true`.
It simulates a connection issue with one of the four nodes.

## Scenarios

### Database Migration

The ToggleShop team has noticed that SQLite isn't able to keep up with demand.
To remedy the situation, they've decided to switch to Postgres.
A feature flag is used to ensure a smooth transition.

To simulate the migration yourself, follow these steps:

- configure OTLP export (see getting started)
- start the load generator: `make run-load-gen`
- observe the logs and metrics
- update the `use-distributed-db` flag fractional distribution to be `["true", 25]` and `["false", 75]` in the [flags.json](./flags.json).
- observe the logs and metrics.
- update the `use-distributed-db` flag fractional distribution to be `["true", 50]` and `["false", 50]` in the [flags.json](./flags.json).
- observe the logs and metrics.
- update the `use-distributed-db` flag fractional distribution to be `["true", 75]` and `["false", 25]` in the [flags.json](./flags.json).
- observe the logs and metrics.
- update the `use-distributed-db` flag fractional distribution to be `["true", 100]` and `["false", 0]` in the [flags.json](./flags.json).
- observe the logs and metrics.

If all goes well, you should see the migration complete without any issues.

![telemetry](./public/img/telemetry.png)

## Kubernetes

To run the ToggleShop in a Kind cluster:

Create the cluster with the supplied definition:

```sh
kind create cluster --config kubernetes/cluster.yaml
```

Install cert manager in the cluster (required for the OpenFeature operator):

```sh
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.yaml && kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'cert-manager'
```

Install the nginx controller:

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml && kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'ingress-nginx'
```

Install the OpenFeature operator:

```sh
helm repo add openfeature https://open-feature.github.io/open-feature-operator/ && helm repo update && helm upgrade --install open-feature-operator openfeature/open-feature-operator
```

Deploy the ToggleShop and supporting infrastructure:

```sh
kubectl -n default apply -f kubernetes/toggle-shop.yaml && kubectl wait --timeout=60s deployment --for condition=Available=True -l 'app=toggle-shop' -n 'default'
```
