const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch() {
    return new Response("hello world");
  },
});

console.log(`Listening on ${server.url}`);
