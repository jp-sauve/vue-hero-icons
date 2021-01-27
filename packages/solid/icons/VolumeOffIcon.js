//import { h, reactive } from 'vue';

  export default {
    name: 'VolumeOffIcon',
    setup(props, context) {
      const size = props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length -1) + 'em'
        : parseInt(props.size) + 'px';
      const myAttrs = context.attrs || {};
      myAttrs.width = context.attrs.width || size;
      myAttrs.height = context.attrs.height || size;
      context.attrs = myAttrs;

      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...ctx.data}>
  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
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