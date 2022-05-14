export interface Shape {
    /** @default 4 */
    borderRadius: number | string
}

export type ShapeOptions = Partial<Shape>
