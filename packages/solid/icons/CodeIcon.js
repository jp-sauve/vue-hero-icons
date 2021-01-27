//import { h, reactive } from 'vue';

  export default {
    name: 'CodeIcon',
    setup(props, context) {
      const size = props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length -1) + 'em'
        : parseInt(props.size) + 'px';
      const myAttrs = context.attrs || {};
      myAttrs.width = context.attrs.width || size;
      myAttrs.height = context.attrs.height || size;
      context.attrs = myAttrs;

      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...ctx.data}>
  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
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