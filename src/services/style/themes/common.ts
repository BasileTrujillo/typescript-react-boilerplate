export const fontFamilyRoboto = {
    fontFamily: [
        "Roboto",
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(",")
};

export const sidebarWidth = 240;

export const typography = {
  ...fontFamilyRoboto,
  overline: {
    fontWeight: 500,
    fontSize: "0.7rem"
  }
};

export const zIndex = {
  appBar: 1200,
  drawer: 1100
};
