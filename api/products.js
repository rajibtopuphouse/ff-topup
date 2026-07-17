import { API_BASE, getHeaders } from "./lib/flashtopup.js";

export default async function handler(req, res) {
  try {
    const path = "/api/reseller/v2/products?page=1&per_page=500";

    const response = await fetch(`${API_BASE}/products?page=1&per_page=500`, {
      method: "GET",
      headers: getHeaders("GET", "/api/reseller/v2/products", ""),
    });

    const data = await response.json();

    res.status(response.status).json(data);

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
