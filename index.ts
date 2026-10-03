import { Hono } from "hono";
import { logger } from "hono/logger";

import monsterIntsToml from "./public/monster-ints.toml";

const app = new Hono();

app.use(logger());

app.on("GET", ["/ints/:intsType", "/integrals/:intsType"], (c) => {
  const intsType = c.req.param("intsType");

  if (intsType === "") return c.notFound();

  if (["monster", "monsters"].includes(intsType)) {
    const { items: monsterInts } = monsterIntsToml;
    const id = c.req.query("id");

    if (id !== undefined) {
      const target = Number.parseInt(id);

      if (target > monsterInts.length || target <= 0) return c.notFound();

      return c.json(monsterInts[target - 1]);
    }

    return c.json(monsterInts);
  }
  
  if (["normal", "normals"].includes(intsType)) {
    return c.text("todo!");
  }

  return c.notFound();
});

app.get("/", (c) => {
  return c.text("lntwo");
});

export default app;
