export default async function handler(req, res) {
  return res.status(200).json({
    success: true,
    message: "Profile API is working"
  });
}
