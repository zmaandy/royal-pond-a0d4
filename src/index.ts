import { renderHtml } from "./renderHtml";

export default {
  async fetch(request, env) {
    const stmt = env.DB.prepare("INSERT INTO comments (author, content) VALUES ('John', 'Test')");
    const { results } = await stmt.all();

    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html",
      },
    });
  },
} satisfies ExportedHandler<Env>;
