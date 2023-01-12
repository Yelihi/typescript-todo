import "styled-components";
import { FontTypes, FontWeight, Colors } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    font: FontTypes;
    fontWeight: FontWeight;
    colors: Colors;
  }
}
