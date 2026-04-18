export const runtime = 'edge';

export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      mensaje: "¡Hola! Mi primera Edge Function",
      fecha: new Date().toISOString()
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
