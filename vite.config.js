// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        roundtest: resolve(__dirname, "Round/roundtest.html"),
        XWordCheck: resolve(__dirname, "Round/WordCheck/index.html"),
        XChifoumi: resolve(__dirname, "Round/Chifoumi/index.html"),
        XTrivia: resolve(__dirname, "Round/Trivia/index.html"),
        XColorCheck: resolve(__dirname, "Round/ColorCheck/index.html"),
        HowManyVibration: resolve(
          __dirname,
          "Round/HowManyVibration/index.html"
        ),
        XVoicecheck: resolve(__dirname, "Round/VoiceCheck/index.html"),
        XSpamclick: resolve(__dirname, "Round/SpamClick/index.html"),
        XLandscapemode: resolve(__dirname, "Round/Landscapemode/index.html"),
        ShakeIt: resolve(__dirname, "Round/ShakeIt/index.html"),
        BatteryCheck: resolve(__dirname, "Round/BatteryCheck/index.html"),
        LumesCheck: resolve(__dirname, "Round/LumesCheck/index.html"),
        NotifCheck: resolve(__dirname, "Round/NotifCheck/index.html"),

      },
    },
  },
});
