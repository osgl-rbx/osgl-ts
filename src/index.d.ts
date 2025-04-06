import { Window, Texture, Bitmap } from "./drawableObject";
import { Font } from "./font";
import { color } from "./color";

declare module "OSGL" {
    export { Window, Texture, Bitmap, Font, color };
}
