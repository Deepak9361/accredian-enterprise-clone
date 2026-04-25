export async function POST(req) {
  const body = await req.json();
  console.log("New Lead:", body);

  return Response.json({ message: "Success" });
}