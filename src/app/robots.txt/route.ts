// Ensure this route is treated as static
export const dynamic = "force-static";

export async function GET() {
  const robots = `User-agent: *
Allow: /
  
Sitemap: https://bintobetter.org/sitemap.xml`;
  
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
