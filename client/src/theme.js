// color design tokens export
export const colorTokens = {
    // grey: {
    //   50: "#E6FBFF",
    //   100: "#CCF7FE",
    //   200: "#99EEFD",
    //   300: "#66E6FC",
    //   400: "#33DDFB",
    //   500: "#00D5FA",
    //   600: "#00A0BC",
    //   700: "#006B7D",
    //   800: "#00353F",
    //   900: "#001519",
    // },

  grey: {// Rustic Green
        100: "#f1f1eb",
        200: "#e4e3d6",
        300: "#d6d4c2",
        400: "#c9c6ad",
        500: "#bbb899",
        600: "#96937a",
        700: "#706e5c",
        800: "#4b4a3d",
        900: "#25251f"
},

    primary: { //Grey/black
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",

    },
  };
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              // background: {
              //   default: '#000000',
              //   alt: '#000000',
              // },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              // background: {
              //   default: '#000000',
              //   alt: '#000000',
              // },
            }),
      },
      typography: {
        fontFamily: ["Copperplate", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Copperplate", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };