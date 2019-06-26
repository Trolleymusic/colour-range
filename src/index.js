import hslRgb from 'hsl-rgb'

const hueValueToHex = (value = 0, saturation, lightness) => {
  const hue = Math.round(value)
  const rgb = hslRgb(hue, saturation, lightness)
  const hex = rgb.map(param => `00${(param).toString(16)}`.slice(-2)).join('')
  return hex
}

/**
 * Get as wide a list of unique colours as possible, based on shifting the hue of the colours
 *
 * Samples from the 'colour wheel' at equally spaced intervals, where red (`#ff0000` / `rgb(255, 0, 0)` / `hsl(0, 1, 0.5)`) is the starting point.
 *
 * ![colour wheel](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/RGB_color_wheel_360.svg/375px-RGB_color_wheel_360.svg.png)
 *
 * For example: calling `colourRange(3)` will give you 3 colours as wide apart as possible, in this case red, blue, and green `[ 'ff0000', '00ff00', '0000ff' ]`
 *
 * This works for providing up to 360 unique colours
 *
 * @param {number} range=1 - Number of unique colours to produce, maximum is 360
 * @param {Object} options
 * @param {number} [options.saturation=1] - Saturation of colours
 * @param {number} [options.lightness=0.5] - Lightness of colours
 * @param {boolean} [options.prefix=false] - Prefix the colours with a '#'
 * @return {Array<string>} - List of unique hex values
 * @example import colourRange from 'colour-range'
 *
 * colourRange(3)
 * // [ 'ff0000', '00ff00', '0000ff' ] (RGB)
 * colourRange(3, { prefix: true })
 * // [ '#ff0000', '#00ff00', '#0000ff' ]
 * colourRange(3, { saturation: 0.6, lightness: 0.2, prefix: true })
 * // [ '#521414', '#145214', '#141452' ]
 * colourRange(360)
 * // [ 'ff0000', ..., 'ff0004' ]
 */
const colourRange = (range = 1, { saturation = 1, lightness = 0.5, prefix = false } = {}) => {
  const max = Math.min(range, 360)
  const prefixChar = prefix ? '#' : ''
  return new Array(max).fill().reduce((colours, current, index) =>
    ([...colours, `${prefixChar}${hueValueToHex((360 / max * index), saturation, lightness)}`]),
  [])
}

export default colourRange
