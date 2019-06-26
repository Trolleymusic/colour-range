<a name="colourRange"></a>

## colourRange(range, options) ⇒ <code>Array.&lt;string&gt;</code>
Get as wide a list of unique colours as possible, based on shifting the hue of the colours

Samples from the 'colour wheel' at equally spaced intervals, where red (`#ff0000` / `rgb(255, 0, 0)` / `hsl(0, 1, 0.5)`) is the starting point.

![colour wheel](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/RGB_color_wheel_360.svg/375px-RGB_color_wheel_360.svg.png)

For example: calling `colourRange(3)` will give you 3 colours as wide apart as possible, in this case red, blue, and green `[ 'ff0000', '00ff00', '0000ff' ]`

This works for providing up to 360 unique colours

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - - List of unique hex values  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| range | <code>number</code> | <code>1</code> | Number of unique colours to produce, maximum is 360 |
| options | <code>Object</code> |  |  |
| [options.saturation] | <code>number</code> | <code>1</code> | Saturation of colours |
| [options.lightness] | <code>number</code> | <code>0.5</code> | Lightness of colours |
| [options.prefix] | <code>boolean</code> | <code>false</code> | Prefix the colours with a '#' |

**Example**  
```js
import colourRange from 'colour-range'

colourRange(3)
// [ 'ff0000', '00ff00', '0000ff' ] (RGB)
colourRange(3, { prefix: true })
// [ '#ff0000', '#00ff00', '#0000ff' ]
colourRange(3, { saturation: 0.6, lightness: 0.2, prefix: true })
// [ '#521414', '#145214', '#141452' ]
colourRange(360)
// [ 'ff0000', ..., 'ff0004' ]
```
