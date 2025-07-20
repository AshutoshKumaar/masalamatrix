// app/api/news/route.js

export async function GET() {
  const apiKey = process.env.NEWSDATA_API_KEY;
  const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=hi&country=in&category=top`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const headlines = data.results?.map((news) => ({
      title: news.title,
      description: news.description,
      link: news.link,
      image_url: news.image_url,
      source: news.source_id,
      pubDate: news.pubDate,
    })) || [];

    return Response.json({ success: true, headlines });
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch news." }, { status: 500 });
  }
}
