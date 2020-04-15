// A custom theme for this app
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {fontFamilyRoboto} from "./common";

const lightMuiTheme = createMuiTheme({
    palette: {
        type: "light",
    },
    typography: {
        ...fontFamilyRoboto,
        overline: {
            fontWeight: 500,
            fontSize: "0.7rem"
        }
    },
    shape: {
        borderRadius: 0.5
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
});

export const lightTheme = responsiveFontSizes(lightMuiTheme);