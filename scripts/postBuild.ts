console.log("post build script");

import { execSync } from "child_process";
import esbuild from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";
import path from "path";

const { ELECTROBUN_BUILD_DIR, ELECTROBUN_APP_NAME } = process.env;
const platform = process.platform;

const APP_BUNDLE_FOLDER =
  platform === "win32"
    ? path.join(ELECTROBUN_BUILD_DIR!, ELECTROBUN_APP_NAME!)
    : path.join(ELECTROBUN_BUILD_DIR!, `${ELECTROBUN_APP_NAME}.app`);

// buildEnvironment
const BUILD_FOLDER = path.resolve(
  platform === "win32"
    ? path.join(APP_BUNDLE_FOLDER, "resources", "app", "views", "main")
    : path.join(
        APP_BUNDLE_FOLDER,
        "Contents",
        "Resources",
        "app",
        "views",
        "main",
      ),
);

// Build main renderer
await esbuild.build({
  entryPoints: [
    path.resolve(path.join("./src", "renderers", "main", "index.tsx")),
  ],
  // outDir: path.join(appPath, "build"),
  outfile: path.join(BUILD_FOLDER, `index.js`),
  bundle: true,
  plugins: [solidPlugin()],
  // jsx: "preserve",
  // jsxImportSource: "solid-js",
  // jsxFactory: "Solid.h", // use Solid's h function for JSX
  // jsxFragment: "Solid.Fragment", // use
  jsxFactory: "Solid.createElement",
  jsxFragment: "Solid.Fragment",
  // TODO: do we need to detect or have different filenames for renderers with and without node integration?
  // or can we just always compile with node as the target and let user turn it on or off in new BrowserWindow()
  // NOTE: you still need to set this to browser even if nodeIntegration is true
  platform: "browser",
  //   target: "node14",
  format: "esm",
  loader: {
    ".tts": "file",
    ".ttf": "file",
    ".node": "file",
    // ".svg": "text",
  },
});
console.log("--------> esbuild main");

console.log("Compiling tailwind css for main renderer...");

/*
Usage:
   tailwindcss build [options]

Options:
   -i, --input              Input file
   -o, --output             Output file
   -w, --watch              Watch for changes and rebuild as needed
   -m, --minify             Minify the output
   -h, --help               Display usage information
         */
// path.resolve(path.join("./src", "renderers", "main", "index.tsx"));
const cssInPath = path.join("./src/renderers", "main", "index.css");
const cssOutPath = path.join(
  BUILD_FOLDER.replace("(", "\\(").replace(")", "\\)"),
  `tailwind.css`,
);
// const contentPath = path.join("./src/renderers", "main", "*.tsx");
execSync(
  `npx @tailwindcss/cli -i ${cssInPath} -o ${cssOutPath} -m`,
  {},
  // (err, stdout, stderr) => console.log("result", err, stdout, stderr)
);

export {};
