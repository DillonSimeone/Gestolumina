import { ILineOptions, IAnimation } from "../types";
/**
 * @source
 */
interface IShineOptions extends ILineOptions {
    count?: number;
    diameter?: number;
    frequencyBand?: "base" | "lows" | "mids" | "highs";
    rotate?: number;
}
/**
 * These are the options for the Shine animation [[IShineOptions]]
 */
export declare class Shine implements IAnimation {
    private _options;
    constructor(options?: IShineOptions);
    draw(audioBufferData: Uint8Array, canvas: CanvasRenderingContext2D): void;
}
export {};
