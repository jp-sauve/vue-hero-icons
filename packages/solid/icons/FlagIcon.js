//import { h, reactive } from 'vue';

  export default {
    name: 'FlagIcon',
    setup(props, context) {
      const size = props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length -1) + 'em'
        : parseInt(props.size) + 'px';
      const myAttrs = context.attrs || {};
      myAttrs.width = context.attrs.width || size;
      myAttrs.height = context.attrs.height || size;
      context.attrs = myAttrs;

      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...ctx.data}>
  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
</svg>

    },
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },
}