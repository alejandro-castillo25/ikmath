import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { Int } from "ikmath-shared";

import monsterIntsToml from "./public/monster-ints.toml";

const app = new Hono();

const corsMiddleware = cors({
  origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
});

app.use("/ints/*", corsMiddleware);
app.use("/integrals/*", corsMiddleware);

app.use(logger());

app.on("GET", ["/ints/:intsType", "/integrals/:intsType"], (c) => {
  const intsType = c.req.param("intsType");

  if (intsType === "") return c.notFound();

  if (["monster", "monsters"].includes(intsType)) {
    const { items: monsterInts } = monsterIntsToml;
    const id = c.req.query("id");
    const { from, to } = c.req.query();
    const search = c.req.query("search");
    const hasHeader = c.req.query("has_header");

    const isOutBounds = (index: number) =>
      index > monsterInts.length || index <= 0;

    let filterHeaders: "headers" | "no_headers" | "no" = "no"

    if (hasHeader !== undefined) {
      if(hasHeader === "true") filterHeaders = "headers"
      if (hasHeader === "false") filterHeaders = "no_headers"
      // TODO, and we're not handling this yet so
    }
    
    let elementForLookup = "";

    if (id !== undefined) {
      const target = Number.parseInt(id);

      if (isOutBounds(target)) return c.notFound();

      return c.json(monsterInts[target - 1]);
    }
    if (search !== undefined) {
      elementForLookup = search.trim();
    }

    let from_i = 0;
    let to_i = monsterInts.length;

    if ([from, to, search].every((v) => v === undefined))
      return c.json(monsterInts);
    // may disable it, because characters such as < and >, get treated as unicode by some reason... maybe just my browser

    if (from !== undefined) {
      from_i = Number.parseInt(from);

      if (Number.isNaN(from_i))
        return c.text(`from=${from} is not a number`, 400);

      if (from_i > monsterInts.length) from_i = monsterInts.length;
      else if (from_i < 0)
        return c.text("I've never heard of negative id's", 400);
    }
    if (to !== undefined) {
      to_i = Number.parseInt(to);

      if (Number.isNaN(to_i)) return c.text(`to=${to} is not a number`, 400);

      if (to_i > monsterInts.length) to_i = monsterInts.length;
      else if (to_i < 0)
        return c.text("I've never heard of negative id's", 400);
    }

    if (from_i > to_i)
      //todo: consider changing this to return a descending array, makes sense (i think...)
      return c.text(`Bad request!\nfrom=${from} > to=${to}, that doesn't make sense`, 400);

    return c.json(
      monsterInts.filter((intEl: Int) => {
        const { id, int } = intEl;

        return id >= from_i && id <= to_i && int.includes(elementForLookup);
      }),
    );
  }

  if (["normal", "normals"].includes(intsType)) {
    return c.text("todo!");
  }

  return c.notFound();
});

app.get("/", (c) => {
  return c.text("ikmath");
});

export default app;
