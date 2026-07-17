import crypto from "crypto";

export const API_BASE = "https://api.flashtopup.com/api/reseller/v2";

export function getHeaders(method, path, body = "") {
  const apiId = process.env.FLASHTOPUP_API_ID;
  const apiKey = process.env.FLASHTOPUP_API_KEY;

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomUUID();

  const bodyHash = crypto
    .createHash("sha256")
    .update(body)
    .digest("hex");

  const canonical = [
    method,
    path,
    timestamp,
    nonce,
    bodyHash,
  ].join("\n");

  const signature = crypto
    .createHmac("sha256", apiKey)
    .update(canonical)
    .digest("hex");

  return {
    "Content-Type": "application/json",
    "X-FT-API-ID": apiId,
    "X-FT-Timestamp": timestamp,
    "X-FT-Nonce": nonce,
    "X-FT-Signature": signature,
  };
}
