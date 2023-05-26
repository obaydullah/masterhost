/** @type {import('tailwindcss').Config} */

// define variable
var textBase = "#4b5563";
var textMuted = "#6b7280";
var textBaseInverted = "#ffffff";
var textMutedInverted = "rgba(255, 255, 255, 0.9)";
var textMessage = "#10b981";
var textHover = "#374151";

/* // backgraound */
var sidebarFill = "#374151";
var sidebarFillActive = "#1f2937";
var fillBase = "#ffffff";
var fillMuted = "#f9fafb";
var fillAmplify = "#f3f4f6";
var fillBaseInverted = "#1f2937";
var fillMutedInverted = "#374151";
var fillAmplifyInverted = "#4b5563";
var fillHover = "#f3f4f6";
var buttonBase = "#4b5563";
var buttonBaseHover = "#374151";
var buttonInverted = "#f3f4f6";
var buttonInvertedHover = "#e5e7eb";

/* // border */
var borderBase = "#374151";
var borderMuted = "#e5e7eb";

var boxshadowBase = "rgb(75, 85, 99)";
var boxshadowMuted = "rgb(71, 85, 105)";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        blue: {
          1000: "#010c38",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },

      textColor: {
        skin: {
          base: textBase,
          muted: textMuted,
          "base-inverted": textBaseInverted,
          "muted-inverted": textMutedInverted,
          message: textMessage,
          hover: textHover,
        },
      },
      backgroundColor: {
        skin: {
          base: fillBase,
          muted: fillMuted,
          amplify: fillAmplify,
          "base-inverted": fillBaseInverted,
          "muted-inverted": fillMutedInverted,
          "amplify-inverted": fillAmplifyInverted,
          "fill-hover": fillHover,
          "sidebar-fill": sidebarFill,
          "sidebar-fill-active": sidebarFillActive,
          "button-base": buttonBase,
          "button-base-hover": buttonBaseHover,
          "button-inverted": buttonInverted,
          "button-inverted-hover": buttonInvertedHover,
        },
      },
      borderColor: {
        skin: {
          base: borderBase,
          muted: borderMuted,
        },
      },
      outlineColor: {
        skin: {
          base: borderBase,
          muted: borderMuted,
        },
      },
      fill: {
        skin: {
          base: textBase,
          muted: textMuted,
          hover: textHover,
          inverted: textMutedInverted,
          "inverted-hover": textBaseInverted,
        },
      },
      stroke: {
        skin: {
          base: textBase,
          muted: textMuted,
          hover: textHover,
          inverted: textMutedInverted,
          "inverted-hover": textBaseInverted,
        },
      },
      boxShadowColor: {
        skin: {
          base: boxshadowBase,
          muted: boxshadowMuted,
        },
      },
    },

    // this style is replace the tailwind default class
    maxWidth: {
      0: "0rem",
      xs: "20rem", //320px
      sm: "24rem", //384px
      md: "28rem", //448px
      lg: "32rem", //512px
      xl: "36rem", //576px
      "2xl": "42rem", //672px
      "3xl": "48rem", //768px
      container: "1920px", // Maximum container width
    },

    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
  },
  plugins: [],
};
