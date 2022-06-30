import { parse } from "./parse.ts";
import {
  assertEquals,
  assertExists,
} from "https://deno.land/std@0.145.0/testing/asserts.ts";

Deno.test("Feature    : querystring.parse", async (t) => {
  await t.step("Scenario : parsing a valid querystring", async (t) => {
    let aValidQueryString: string;
    let result: Record<string, string>;

    await t.step("given  : a valid querystring", () => {
      aValidQueryString = "name=billy&age=23";
    });

    await t.step("when   : parsing a valid querystring", () => {
      result = parse(aValidQueryString);
    });

    await t.step("then   : result should have property name = billy", () => {
      assertExists(result["name"]);
      assertEquals(result["name"], "billy");
    });

    await t.step("and    : result should have property age = 23", () => {
      assertExists(result["age"]);
      assertEquals(result["age"], "23");
    });
  });
});
