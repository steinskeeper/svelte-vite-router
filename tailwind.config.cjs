module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["fantasy"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
