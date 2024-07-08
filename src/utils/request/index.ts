type RequestProps = Omit<RequestInit, "method">;

type requestURL = RequestInfo | URL;
type requestOptions = Omit<RequestProps, "body" | "method">;

export async function fetchRequest<T = unknown>(
  url: requestURL,
  { body, ...options }: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      ...options.headers
    },
    body
  });
  if (!response.ok) {
    throw new Error("Erro ao realizar chamada: " + url);
  }

  if (response.headers.get("Content-Type") === "application/json") {
    const reponseJSON = await response.json();
    return reponseJSON.data as T;
  }

  return response as T;
}

export async function get<T = unknown>(
  url: requestURL,
  options?: requestOptions
) {
  return fetchRequest<T>(url, { method: "GET", ...options });
}

export async function post<T = unknown>(
  url: requestURL,
  body: unknown,
  options?: requestOptions
) {
  console.log("🚀 ~ body:", body);
  return fetchRequest<T>(url, {
    method: "POST",
    body: JSON.stringify(body),
    ...options
  });
}

export async function put<T = unknown>(
  url: requestURL,
  body: unknown,
  options?: requestOptions
) {
  return fetchRequest<T>(url, {
    method: "PUT",
    body: JSON.stringify(body),
    ...options
  });
}

export async function del<T = unknown>(
  url: requestURL,
  options?: requestOptions
) {
  return fetchRequest<T>(url, { method: "DELETE", ...options });
}

const request = {
  get,
  post,
  put,
  del
};

export default request;
