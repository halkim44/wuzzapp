export async function GET() {
  return new Response("Wuzzapp API by Halkim44", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
