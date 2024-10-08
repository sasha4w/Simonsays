import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  plugins: [
    pugPlugin({
      handler: (pugContent, { filename }) => {
        // Custom processing if needed
        return pugContent;
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
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
        Aimlabs: resolve(__dirname, "Round/Aimlabs/index.html"),
        gameOver: resolve(__dirname, "gameOver.html"),
        utils: resolve(__dirname, "assets/utils.js"),
      },
    },
  },
});
