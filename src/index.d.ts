import * as types from "./types";
import { color } from "./color";
import { draw } from "./draw";
import { Window, Texture } from "./drawableObject";
import { Font } from "./font";

declare module "OSGL" {
    export {
        Window,
        Texture,
        color,
        types,
        draw,
        Font,
    }
}
