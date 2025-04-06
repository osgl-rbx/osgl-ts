import { Drawable, ImageBase, OSGLWindow } from "../types";
import { Base } from "./base";

export type WindowBase<T> = Base<T> & {
    Render(this: OSGLWindow): undefined;
    RenderTargetFPS(this: OSGLWindow): undefined;
    AddRenderers(this: OSGLWindow, ...renderers: Drawable[]): undefined;
    RemoveRenderers(this: OSGLWindow, ...renderers: Drawable[]): undefined;

    GetRelativeMousePosition(
        this: OSGLWindow,
        image: ImageBase,
    ): [boolean, number, number];

    Destroy(this: OSGLWindow): undefined;
};
