export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uid, service_code } = req.body;

  if (!uid || !service_code) {
    return res.status(400).json({
      error: "UID এবং service_code লাগবে"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Backend is working!",
    uid,
    service_code
  });
}
