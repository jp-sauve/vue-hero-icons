//import { h, reactive } from 'vue';

  export default {
    name: 'FolderOpenIcon',
    setup(props, context) {
      const size = props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length -1) + 'em'
        : parseInt(props.size) + 'px';
      const myAttrs = context.attrs || {};
      myAttrs.width = context.attrs.width || size;
      myAttrs.height = context.attrs.height || size;
      context.attrs = myAttrs;

      return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...ctx.data}>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"/>
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