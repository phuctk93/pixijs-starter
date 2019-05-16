const { src, task, exec, context } = require("fuse-box/sparky");
const { FuseBox, WebIndexPlugin, CSSPlugin, CSSResourcePlugin, QuantumPlugin } = require("fuse-box");

context({
    isProduction: false,
    getConfig() {
        return FuseBox.init({
            homeDir: "src",
            target: "browser@es5",
            output: "dist/$name.js",
            plugins: [
                  [
                      CSSResourcePlugin({ dist: "dist/css" }),
                      CSSPlugin()
                  ],
                  !this.isProduction && WebIndexPlugin({
                      template: "src/index.html",
                      author: "phuctk93",
                      title: "A simple pixijs template with FuseBox",
                      keywords: "pixi, pixijs, fusebox, typescript"
                  }),
                  this.isProduction && QuantumPlugin({
                      uglify: true,
                      treeshake: true,
                      bakeApiIntoBundle: "app",
                      css: true
                  })
              ],
        });
    }
});

task("default", async context => {
    const fuse = context.getConfig();
    fuse.dev({
        open: true,
        port: 8080
    }); // launch http server
    fuse.bundle("app")
    .shim({
        "pixi.js": {exports: "PIXI"}
    })
    .hmr()
    .watch()
    .instructions(">index.ts");
    await fuse.run();
});

task("build", async context => {
    context.isProduction = true;
    const fuse = context.getConfig();
    fuse.bundle("app")
        .shim({
            "pixi.js": {exports: "PIXI"}
        })
        .instructions(">index.ts");
    await fuse.run();
});