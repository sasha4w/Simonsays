// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from 'vite-plugin-pug';
export default defineConfig({
  plugins: [pugPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pug: resolve(__dirname, "views/roundLayout.pug"),
        roundtest: resolve(__dirname, "Round/roundtest.html"),
        WordCheck: resolve(__dirname, "Round/WordCheck/index.html"),
        Chifoumi: resolve(__dirname, "Round/Chifoumi/index.html"),
        Trivia: resolve(__dirname, "Round/Trivia/index.html"),
        ColorCheck: resolve(__dirname, "Round/ColorCheck/index.html"),
        HowManyVibration: resolve(__dirname, "Round/HowManyVibration/index.html"),
        Voicecheck: resolve(__dirname, "Round/VoiceCheck/index.html"),
        Spamclick: resolve(__dirname, "Round/SpamClick/index.html"),
        Landscapemode: resolve(__dirname, "Round/Landscapemode/index.html"),
        ShakeIt: resolve(__dirname, "Round/ShakeIt/index.html"),
        BatteryCheck: resolve(__dirname, "Round/BatteryCheck/index.html"),
        LumesCheck: resolve(__dirname, "Round/LumesCheck/index.html"),
        NotifCheck: resolve(__dirname, "Round/NotifCheck/index.html"),
        gameOver: resolve(__dirname, "gameOver.html"),
        utils: resolve(__dirname, "assets/utils.js"),
      },
    },
  },
});
