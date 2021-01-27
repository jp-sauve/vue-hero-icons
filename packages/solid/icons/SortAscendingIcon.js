//import { h, reactive } from 'vue';

  export default {
    name: 'SortAscendingIcon',
    setup(props, context) {
      const size = props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length -1) + 'em'
        : parseInt(props.size) + 'px';
      const myAttrs = context.attrs || {};
      myAttrs.width = context.attrs.width || size;
      myAttrs.height = context.attrs.height || size;
      context.attrs = myAttrs;

      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...ctx.data}>
  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"/>
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