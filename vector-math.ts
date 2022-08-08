/**
 * Vector representation
 */
//% blockNamespace="vectorMath"
class Vector {
    private _r: number
    private _theta: number // angle in radians
    private _dir: number // angle in degrees
    private _x: number
    private _y: number

    /**
     * Initialize object.
     * @param {number} mag - Magnitude of vector.
     * @param {number} dir - Direction of vector in degrees.
     */
    constructor(mag: number, dir: number) {
        this._r = mag
        this.dir = dir
    }   // constructor(number, number)

    /**
     * Get the direction of the vector in degrees.
     */
    //% blockCombine block="direction"
    get dir() {
        return this._dir
    }   // get dir()

    /**
     * Set the direction of the vector in degrees.
     */
    //% blockCombine block="direction"
    set dir(value: number) {
        this._dir = value
        this._theta = Vector.deg2rad(value)
        this.calcCartesian()
    }   // set dir()

    /**
     * Get the magnitude of the vector.
     */
    //% blockCombine block="magnitude (size)"
    get mag(): number {
        return this._r
    }   // get mag()

    /**
     * Set the magnitude of the vector.
     */
    //% blockCombine block="magnitude (size)"
    set mag(value: number) {
        this._r = value
        this.calcCartesian()
    }   // set mag()

    /**
     * Get the horizontal component of the vector in the Cartesian plane.
     */
    //% blockCombine
    get x(): number {
        return this._x
    }   // get x()

    /**
     * Get the vertical component of the vector in the Cartesian plane.
     */
    //% blockCombine
    get y(): number {
        return this._y
    }   // get y()

    /**
     * Update the Cartesian representation of the vector.
     */
    calcCartesian(): void {
        this._x = this._r * Math.cos(this._theta)
        this._y = this._r * Math.sin(this._theta)
    }   // calcCartesian()

    /**
     * Convert degrees to radians
     * @param {number} angle - The angle to convert in degrees.
     * @return {number} The angle in radians.
     */
    static deg2rad(angle: number): number {
        return angle * Math.PI / 180;
    }   // deg2rad()

    /**
     * Convert radians to degrees.
     * @param {number} angle - The angle to convert in radians.
     * @return {number} The angle in degrees.
     */
    static rad2deg(theta: number): number {
        return theta * 180 / Math.PI;
    }   // rad2deg
}   // class Vector

/**
 * Extension for manipulating vectors.
 */
//% weight=0 color=#b8860b icon="\uf124" block="Vectors"
//% advanced=true
namespace vectorMath {
    /**
     * Create a vector.
     */
    //% blockId=vectormath_create_vector
    //% block="create vector with magnitude %mag and direction %dir"
    //% mag.defl=0 dir.defl=0
    export function createVector(mag: number, dir: number): Vector {
        return new Vector(mag, dir)
    }   // createVector()

    /**
     * Create a vector from sprites.
     */
    //% blockId=vectormath_create_vector_from_sprites
    //% block="create vector from sprite %spriteFrom to sprite %spriteTo"
    export function createVectorFromSprites(spriteFrom: Sprite, spriteTo: Sprite): Vector {
        let mag = Math.sqrt((spriteFrom.x - spriteTo.x) ** 2 + (spriteFrom.y - spriteTo.y) ** 2)
        let dir = Vector.rad2deg(Math.atan2(spriteTo.y - spriteFrom.y, spriteTo.x - spriteFrom.x))
        return new Vector(mag, dir)
    }   // createVectorFromSprites()
}   // namespace vectorMath