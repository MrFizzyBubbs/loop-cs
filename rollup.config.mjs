import { readFileSync } from "node:fs";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

const { name } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const extensions = [".js", ".ts"];

// KoLmafia loads every script on its own, so each entrypoint is a separate build with no shared chunks.
// Add another entry here for each script KoLmafia should be able to run (e.g. a ccs or consult script).
const scripts = [{ input: "src/main.ts", file: `KoLmafia/scripts/${name}/loopcs.js` }];

export default scripts.map(({ input, file }) =>
  defineConfig({
    input,
    // Provided by KoLmafia at runtime.
    external: ["kolmafia"],
    output: { file, format: "cjs", exports: "named" },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      // Uses babel.config.js; node_modules are transpiled too so libram matches the Rhino target.
      babel({ babelHelpers: "bundled", extensions }),
    ],
    watch: { clearScreen: false },
  }),
);
