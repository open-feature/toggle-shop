/* eslint-disable import/no-anonymous-default-export */
import http from "k6/http";
import {
  randomIntBetween,
  uuidv4,
} from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import { sleep } from "k6";

export default function () {
  const url = "http://0.0.0.0:3000";

  const params = {
    headers: {
      "X-Targeting-Key": uuidv4(),
    },
  };
  http.get(`${url}/api/products`, params);

  sleep(randomIntBetween(1, 3));
  const numberOfProducts = randomIntBetween(0, 7);

  for (let i = 0; i < numberOfProducts; i++) {
    const productId = randomIntBetween(1, 8);
    http.get(`${url}/api/products/${productId}`, params);
    sleep(1);
  }
  sleep(1);
}
