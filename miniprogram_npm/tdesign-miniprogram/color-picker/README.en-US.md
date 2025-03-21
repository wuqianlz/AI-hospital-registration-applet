:: BASE_DOC ::

## API

### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
enable-alpha | Boolean | false | \- | N
format | String | RGB | options: RGB/RGBA/HSL/HSLA/HSB/HSV/HSVA/HEX/CMYK/CSS | N
swatch-colors | Array | - | swatch colors。Typescript：`Array<string> \| null` | N
type | String | base | options: base/multiple。Typescript：`TypeEnum ` `type TypeEnum = 'base' \| 'multiple'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts) | N
value | String | - | color value | N
default-value | String | undefined | color value。uncontrolled property | N

### ColorPicker Events

name | params | description
-- | -- | --
change | `(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' `<br/>
palette-bar-change | `(detail: { color: ColorObject })` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}`<br/>
