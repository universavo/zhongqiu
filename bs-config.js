module.exports = {
    "ui": {
      port: 3001,
      weinre: {
        port: 9090
      },
    },
    "files": ["dist/**/*"],
    "server": {
      baseDir: "dist",
      index: "index.html"
    },
};
