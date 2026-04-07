export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message || !message.trim()) {
      return Response.json({ error: 'message is empty' }, { status: 400 });
    }

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return Response.json(
        { error: data?.error?.message || 'gemini request failed' },
        { status: response.status }
      );
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || 'no response';

    return Response.json({ reply });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'server error' }, { status: 500 });
  }
}