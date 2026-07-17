import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiId = process.env.FLASHTOPUP_API_ID;
  const apiKey = process.env.FLASHTOPUP_API_KEY;

  const body = JSON.stringify(req.body);

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomUUID();

  const bodyHash = crypto
    .createHash("sha256")
    .update(body)
    .digest("hex");

  const path = "/api/reseller/v2/order";

  const canonical = [
    "POST",
    path,
    timestamp,
    nonce,
    bodyHash,
  ].join("\n");

  const signature = crypto
    .createHmac("sha256", apiKey)
    .update(canonical)
    .digest("hex");

  const response = await fetch(
    "https://api.flashtopup.com/api/reseller/v2/order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-FT-API-ID": apiId,
        "X-FT-Timestamp": timestamp,
        "X-FT-Nonce": nonce,
        "X-FT-Signature": signature,
      },
      body,
    }
  );

  const data = await response.json();

  res.status(response.status).json(data);
}
