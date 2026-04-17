import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(8px, -18px, 0)" },
          "100%": { transform: "translate3d(0, -36px, 0)" },
        },
      },
      animation: {
        "terminal-float": "float 26s ease-in-out infinite alternate",
      },
    },
  },
};

export default config;
