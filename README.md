# vue-hero-icons

<a href="https://npmjs.org/package/@vue-hero-icons/outline">
  <img src="https://img.shields.io/npm/v/@vue-hero-icons/outline.svg"
       alt="npm version">
</a>
<a href="https://github.com/matschik/vue-hero-icons/blob/master/LICENSE.md">
  <img src="https://img.shields.io/npm/l/@vue-hero-icons/outline.svg"
       alt="license">
</a>

> A set of free MIT-licensed high-quality SVG icons, sourced from [@refactoringui/heroicons](https://github.com/refactoringui/heroicons), as Vue functional components.

## Install

```bash
# Only outline icons
yarn add @vue-hero-icons/outline

# Only solid icons
yarn add @vue-hero-icons/solid
```

## Usage

```js
// Only import what you need!
import { AnnotationIcon, ArrowCircleUpIcon, ... } from '@vue-hero-icons/outline'
```

See all icons and usage here: https://vue-hero-icons.netlify.com

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute. 
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<annotation-icon size="1.5x" class="custom-class"></annotation-icon> 
```

You can also set a `px` size directly by just passing an integer

```html
<annotation-icon size="25" class="custom-class"></annotation-icon> 
```

## Tree shaking

By using ES imports like `import { AnnotationIcon } from "@vue-hero-icons/outline"` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

<!-- To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/vue-hero-icons/icons/) directory, e.g. `import AnnotationIcon from 'vue-hero-icons/icons/AnnotationIcon'`. -->

## Inspiration

- [vue-feather-icons](https://github.com/egoist/vue-feather-icons)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

**heroicons** © [Refactoring UI](https://github.com/refactoringui), Released under the [MIT](./LICENSE) License.<br>

## Author

**vue-hero-icons** © [matschik](https://github.com/matschik), Released under the [MIT](./LICENSE) License.<br>
<!-- Authored and maintained by Matschik with help from contributors ([list](https://github.com/matschik/vue-hero-icons/contributors)). -->

> GitHub [@matschik](https://github.com/matschik) · Twitter [@matschik_](https://twitter.com/matschik_)
