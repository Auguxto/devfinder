import { Theme } from "./devfinder";

declare module "styled-components" {
  export interface ThemeProps extends Theme {}
}
