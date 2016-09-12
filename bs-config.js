module.exports = {
    "ui": {
      port: 3001,
      weinre: {
        port: 9090
      },
    },
    "files": ["app/index.html", "app/style.css", "app/src/**/*"],
    "server": {
      baseDir: "app",
      index: "index.html"
    },
};
