import { PlayerDetailsInterface } from "./App";

const baseURL = "https://ceesoft.pythonanywhere.com";

type requestMethods = "POST" | "GET" | "PUT";

const apiCall = async (path: string, method: requestMethods, body?: any) => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseURL}${path}`, requestOptions);
  const data = await response.json();
  return data;
};

export async function saveGameDetail(details: PlayerDetailsInterface) {
    const data = await apiCall("/post", "POST", details);
    return data;
  }

export async function getGameDetails() {
    const data = await apiCall("/posts", "GET");
    return data;
  }
