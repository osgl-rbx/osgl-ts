import { Window } from "./DrawableObject/window";
import { Texture } from "./DrawableObject/texture";
import { Bitmap } from "./bitmap";
import { Font } from "./font";
import { color } from "./color";
import { Enum } from "./enum";

declare module "OSGL" {
    export { Window, Texture, Bitmap, Enum, Font, color };
}
