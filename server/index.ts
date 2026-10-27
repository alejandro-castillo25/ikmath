import { Hono } from "hono";
// import { handle } from 'hono/vercel'

import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { Int } from "ikmath-shared";

// import monsterIntsToml from "./public/monster-ints.toml";

import { monsterInts } from "./public/monster-ints";
import { normalInts } from "./public/normal-ints";

const app = new Hono().basePath("/api");
// const app = new Hono();

const corsMiddleware = cors({
  origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
});

app.use("/ints/*", corsMiddleware);
app.use("/integrals/*", corsMiddleware);

app.use(logger());

app.on("GET", ["/ints/:intsType", "/integrals/:intsType"], (c) => {
  const intsType = c.req.param("intsType");

  if (intsType === "") return c.notFound();

  let mainInts: Array<Int>;

  if (["monster", "monsters"].includes(intsType)) {
    mainInts = monsterInts;
  } else if (["normal", "normals"].includes(intsType)) {
    mainInts = normalInts;
  } else return c.notFound();

  const count = c.req.query("count");

  if (count !== undefined) {
    if (count.toLowerCase() === "true")
      return c.json({
        count: mainInts.length,
      } as Object);

    return c.text("Invalid argument in count query. Expected: 'true'", 400);
  }

  const id = c.req.query("id");
  const { from, to } = c.req.query();
  const search = c.req.query("search");
  const hasHeader = c.req.query("has_header");

  const isOutBounds = (index: number) => index > mainInts.length || index <= 0;

  let elementForLookup = "";

  if (id !== undefined) {
    const target = Number.parseInt(id);

    if (isOutBounds(target)) return c.notFound();

    return c.json(mainInts[target - 1]);
  }
  if (search !== undefined) {
    elementForLookup = search.trim();
  }

  let from_i = 0;
  let to_i = mainInts.length;

  if ([from, to, search].every((v) => v === undefined)) return c.json(mainInts);
  // may disable it, because characters such as < and >, get treated as unicode by some reason... maybe just my browser

  if (from !== undefined) {
    from_i = Number.parseInt(from);

    if (Number.isNaN(from_i))
      return c.text(`from=${from} is not a number`, 400);

    if (from_i > mainInts.length) from_i = mainInts.length;
    else if (from_i < 0)
      return c.text("I've never heard of negative id's", 400);
  }
  if (to !== undefined) {
    to_i = Number.parseInt(to);

    if (Number.isNaN(to_i)) return c.text(`to=${to} is not a number`, 400);

    if (to_i > mainInts.length) to_i = mainInts.length;
    else if (to_i < 0) return c.text("I've never heard of negative id's", 400);
  }

  if (from_i > to_i)
    //todo: consider changing this to return a descending array, makes sense (i think...)
    return c.text(
      `Bad request!\nfrom=${from} > to=${to}, that doesn't make sense`,
      400,
    );

  return c.json(
    mainInts.filter((intEl: Int) => {
      const { id, int, header, footer } = intEl;

      return (
        id >= from_i &&
        id <= to_i &&
        (int.includes(elementForLookup) ||
          (header ?? "").includes(elementForLookup) ||
          (footer ?? "").includes(elementForLookup))
      );
    }),
  );
});

app.get("/", (c) => {
  return c.text("ikmath");
});

export default app;
