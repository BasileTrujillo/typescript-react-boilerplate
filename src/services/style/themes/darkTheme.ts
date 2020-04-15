import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {fontFamilyRoboto} from "./common";

const darkMuiTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
    typography: {
        ...fontFamilyRoboto,
        overline: {
            fontWeight: 500,
            fontSize: "0.7rem"
        }
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
});

export const darkTheme = responsiveFontSizes(darkMuiTheme);