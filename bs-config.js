module.exports = {
    "ui": {
      port: 3001,
      weinre: {
        port: 9090
      },
    },
    "files": ["dist/src/**/*", "dist/index.html", "dist/style.css"],
    "server": {
      baseDir: "dist",
      index: "index.html"
    },
};
