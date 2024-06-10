// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        roundtest: resolve(__dirname, "Round/roundtest.html"),
        XWordCheck: resolve(__dirname, "Round/XWordCheck/index.html"),
        XChifoumi: resolve(__dirname, "Round/XChifoumi/index.html"),
        XTrivia: resolve(__dirname, "Round/XTrivia/index.html"),
        XColorCheck: resolve(__dirname, "Round/XColorCheck/index.html"),
        HowManyVibration: resolve(
          __dirname,
          "Round/HowManyVibration/index.html"
        ),
        Voicecheck: resolve(__dirname, "Round/Voicecheck/index.html"),
        Spamclick: resolve(__dirname, "Round/XSpamclick/index.html"),
        Landscapemode: resolve(__dirname, "Round/XLandscapemode/index.html"),
      },
    },
  },
});
