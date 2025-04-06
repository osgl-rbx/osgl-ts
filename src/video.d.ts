import { RawTexture, OSGLVideo } from "./types";

export declare const Video: {
    new: (width: number, height: number, frames?: buffer[]) => OSGLVideo;
    from: (collection: RawTexture[]) => OSGLVideo;
};
