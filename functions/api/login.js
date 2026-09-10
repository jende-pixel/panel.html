export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const data = await request.json();
    if (data.password === env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    }
    return new Response(JSON.stringify({ success: false, message: "Şifre Yanlış!" }), { status: 401, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: "Hata oluştu." }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

