'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _mergeJSXProps = require('@vue/babel-helper-vue-jsx-merge-props');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _mergeJSXProps__default = /*#__PURE__*/_interopDefaultLegacy(_mergeJSXProps);

//import { h, reactive } from 'vue';
var AcademicCapIcon = {
  name: 'AcademicCapIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var AdjustmentsIcon = {
  name: 'AdjustmentsIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var AnnotationIcon = {
  name: 'AnnotationIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArchiveIcon = {
  name: 'ArchiveIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowCircleDownIcon = {
  name: 'ArrowCircleDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowCircleLeftIcon = {
  name: 'ArrowCircleLeftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowCircleRightIcon = {
  name: 'ArrowCircleRightIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowCircleUpIcon = {
  name: 'ArrowCircleUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowDownIcon = {
  name: 'ArrowDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowLeftIcon = {
  name: 'ArrowLeftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowNarrowDownIcon = {
  name: 'ArrowNarrowDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowNarrowLeftIcon = {
  name: 'ArrowNarrowLeftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowNarrowRightIcon = {
  name: 'ArrowNarrowRightIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowNarrowUpIcon = {
  name: 'ArrowNarrowUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowRightIcon = {
  name: 'ArrowRightIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowUpIcon = {
  name: 'ArrowUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ArrowsExpandIcon = {
  name: 'ArrowsExpandIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 19 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "stroke": "#374151",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var AtSymbolIcon = {
  name: 'AtSymbolIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BackspaceIcon = {
  name: 'BackspaceIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BadgeCheckIcon = {
  name: 'BadgeCheckIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BanIcon = {
  name: 'BanIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BeakerIcon = {
  name: 'BeakerIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BellIcon = {
  name: 'BellIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BookOpenIcon = {
  name: 'BookOpenIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BookmarkAltIcon = {
  name: 'BookmarkAltIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BookmarkIcon = {
  name: 'BookmarkIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var BriefcaseIcon = {
  name: 'BriefcaseIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CakeIcon = {
  name: 'CakeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CalculatorIcon = {
  name: 'CalculatorIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CalendarIcon = {
  name: 'CalendarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CameraIcon = {
  name: 'CameraIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CashIcon = {
  name: 'CashIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChartBarIcon = {
  name: 'ChartBarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChartPieIcon = {
  name: 'ChartPieIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChartSquareBarIcon = {
  name: 'ChartSquareBarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChatAlt2Icon = {
  name: 'ChatAlt2Icon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
      }
    }), h("path", {
      "attrs": {
        "d": "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChatAltIcon = {
  name: 'ChatAltIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChatIcon = {
  name: 'ChatIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CheckCircleIcon = {
  name: 'CheckCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CheckIcon = {
  name: 'CheckIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronDoubleDownIcon = {
  name: 'ChevronDoubleDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronDoubleLeftIcon = {
  name: 'ChevronDoubleLeftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronDoubleRightIcon = {
  name: 'ChevronDoubleRightIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronDoubleUpIcon = {
  name: 'ChevronDoubleUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronDownIcon = {
  name: 'ChevronDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronLeftIcon = {
  name: 'ChevronLeftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronRightIcon = {
  name: 'ChevronRightIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChevronUpIcon = {
  name: 'ChevronUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ChipIcon = {
  name: 'ChipIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13 7H7v6h6V7z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ClipboardCheckIcon = {
  name: 'ClipboardCheckIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ClipboardCopyIcon = {
  name: 'ClipboardCopyIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ClipboardListIcon = {
  name: 'ClipboardListIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ClipboardIcon = {
  name: 'ClipboardIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
      }
    }), h("path", {
      "attrs": {
        "d": "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ClockIcon = {
  name: 'ClockIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CloudDownloadIcon = {
  name: 'CloudDownloadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CloudUploadIcon = {
  name: 'CloudUploadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
      }
    }), h("path", {
      "attrs": {
        "d": "M9 13h2v5a1 1 0 11-2 0v-5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CloudIcon = {
  name: 'CloudIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CodeIcon = {
  name: 'CodeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CogIcon = {
  name: 'CogIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CollectionIcon = {
  name: 'CollectionIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ColorSwatchIcon = {
  name: 'ColorSwatchIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CreditCardIcon = {
  name: 'CreditCardIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CubeTransparentIcon = {
  name: 'CubeTransparentIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CubeIcon = {
  name: 'CubeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyBangladeshiIcon = {
  name: 'CurrencyBangladeshiIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyDollarIcon = {
  name: 'CurrencyDollarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyEuroIcon = {
  name: 'CurrencyEuroIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyPoundIcon = {
  name: 'CurrencyPoundIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyRupeeIcon = {
  name: 'CurrencyRupeeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CurrencyYenIcon = {
  name: 'CurrencyYenIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var CursorClickIcon = {
  name: 'CursorClickIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DatabaseIcon = {
  name: 'DatabaseIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DesktopComputerIcon = {
  name: 'DesktopComputerIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DeviceMobileIcon = {
  name: 'DeviceMobileIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DeviceTabletIcon = {
  name: 'DeviceTabletIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentAddIcon = {
  name: 'DocumentAddIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentDownloadIcon = {
  name: 'DocumentDownloadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentDuplicateIcon = {
  name: 'DocumentDuplicateIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentRemoveIcon = {
  name: 'DocumentRemoveIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentReportIcon = {
  name: 'DocumentReportIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentSearchIcon = {
  name: 'DocumentSearchIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentTextIcon = {
  name: 'DocumentTextIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DocumentIcon = {
  name: 'DocumentIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DotsCircleHorizontalIcon = {
  name: 'DotsCircleHorizontalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DotsHorizontalIcon = {
  name: 'DotsHorizontalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DotsVerticalIcon = {
  name: 'DotsVerticalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DownloadIcon = {
  name: 'DownloadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var DuplicateIcon = {
  name: 'DuplicateIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
      }
    }), h("path", {
      "attrs": {
        "d": "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var EmojiHappyIcon = {
  name: 'EmojiHappyIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var EmojiSadIcon = {
  name: 'EmojiSadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ExclamationCircleIcon = {
  name: 'ExclamationCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ExclamationIcon = {
  name: 'ExclamationIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ExternalLinkIcon = {
  name: 'ExternalLinkIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
      }
    }), h("path", {
      "attrs": {
        "d": "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var EyeOffIcon = {
  name: 'EyeOffIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var EyeIcon = {
  name: 'EyeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10 12a2 2 0 100-4 2 2 0 000 4z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FastForwardIcon = {
  name: 'FastForwardIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FilmIcon = {
  name: 'FilmIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FilterIcon = {
  name: 'FilterIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FingerPrintIcon = {
  name: 'FingerPrintIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FireIcon = {
  name: 'FireIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FlagIcon = {
  name: 'FlagIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FolderAddIcon = {
  name: 'FolderAddIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      }
    }), h("path", {
      "attrs": {
        "stroke": "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M8 11h4m-2-2v4"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FolderDownloadIcon = {
  name: 'FolderDownloadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      }
    }), h("path", {
      "attrs": {
        "stroke": "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M10 9v4m0 0l-2-2m2 2l2-2"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FolderOpenIcon = {
  name: 'FolderOpenIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FolderRemoveIcon = {
  name: 'FolderRemoveIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      }
    }), h("path", {
      "attrs": {
        "stroke": "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": "M8 11h4"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var FolderIcon = {
  name: 'FolderIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var GiftIcon = {
  name: 'GiftIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var GlobeAltIcon = {
  name: 'GlobeAltIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var GlobeIcon = {
  name: 'GlobeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var HandIcon = {
  name: 'HandIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var HashtagIcon = {
  name: 'HashtagIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var HeartIcon = {
  name: 'HeartIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var HomeIcon = {
  name: 'HomeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var IdentificationIcon = {
  name: 'IdentificationIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var InboxInIcon = {
  name: 'InboxInIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var InboxIcon = {
  name: 'InboxIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var InformationCircleIcon = {
  name: 'InformationCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var KeyIcon = {
  name: 'KeyIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LibraryIcon = {
  name: 'LibraryIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LightBulbIcon = {
  name: 'LightBulbIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LightningBoltIcon = {
  name: 'LightningBoltIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LinkIcon = {
  name: 'LinkIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LocationMarkerIcon = {
  name: 'LocationMarkerIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LockClosedIcon = {
  name: 'LockClosedIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LockOpenIcon = {
  name: 'LockOpenIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LoginIcon = {
  name: 'LoginIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var LogoutIcon = {
  name: 'LogoutIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MailOpenIcon = {
  name: 'MailOpenIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MailIcon = {
  name: 'MailIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
      }
    }), h("path", {
      "attrs": {
        "d": "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MapIcon = {
  name: 'MapIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MenuAlt1Icon = {
  name: 'MenuAlt1Icon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MenuAlt2Icon = {
  name: 'MenuAlt2Icon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MenuAlt3Icon = {
  name: 'MenuAlt3Icon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MenuAlt4Icon = {
  name: 'MenuAlt4Icon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MenuIcon = {
  name: 'MenuIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MicrophoneIcon = {
  name: 'MicrophoneIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MinusCircleIcon = {
  name: 'MinusCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MinusSmIcon = {
  name: 'MinusSmIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MinusIcon = {
  name: 'MinusIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MoonIcon = {
  name: 'MoonIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var MusicNoteIcon = {
  name: 'MusicNoteIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var NewspaperIcon = {
  name: 'NewspaperIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var OfficeBuildingIcon = {
  name: 'OfficeBuildingIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PaperAirplaneIcon = {
  name: 'PaperAirplaneIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PaperClipIcon = {
  name: 'PaperClipIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PauseIcon = {
  name: 'PauseIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PencilAltIcon = {
  name: 'PencilAltIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PencilIcon = {
  name: 'PencilIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PhoneIncomingIcon = {
  name: 'PhoneIncomingIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
      }
    }), h("path", {
      "attrs": {
        "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PhoneMissedCallIcon = {
  name: 'PhoneMissedCallIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PhoneOutgoingIcon = {
  name: 'PhoneOutgoingIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
      }
    }), h("path", {
      "attrs": {
        "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PhoneIcon = {
  name: 'PhoneIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PhotographIcon = {
  name: 'PhotographIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PlayIcon = {
  name: 'PlayIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PlusCircleIcon = {
  name: 'PlusCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PlusSmIcon = {
  name: 'PlusSmIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PlusIcon = {
  name: 'PlusIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PresentationChartBarIcon = {
  name: 'PresentationChartBarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PresentationChartLineIcon = {
  name: 'PresentationChartLineIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PrinterIcon = {
  name: 'PrinterIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var PuzzleIcon = {
  name: 'PuzzleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var QrcodeIcon = {
  name: 'QrcodeIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var QuestionMarkCircleIcon = {
  name: 'QuestionMarkCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ReceiptRefundIcon = {
  name: 'ReceiptRefundIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ReceiptTaxIcon = {
  name: 'ReceiptTaxIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var RefreshIcon = {
  name: 'RefreshIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ReplyIcon = {
  name: 'ReplyIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var RewindIcon = {
  name: 'RewindIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var RssIcon = {
  name: 'RssIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
      }
    }), h("path", {
      "attrs": {
        "d": "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SaveAsIcon = {
  name: 'SaveAsIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
      }
    }), h("path", {
      "attrs": {
        "d": "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SaveIcon = {
  name: 'SaveIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ScaleIcon = {
  name: 'ScaleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ScissorsIcon = {
  name: 'ScissorsIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SearchCircleIcon = {
  name: 'SearchCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SearchIcon = {
  name: 'SearchIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SelectorIcon = {
  name: 'SelectorIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ServerIcon = {
  name: 'ServerIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ShareIcon = {
  name: 'ShareIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ShieldCheckIcon = {
  name: 'ShieldCheckIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ShieldExclamationIcon = {
  name: 'ShieldExclamationIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ShoppingBagIcon = {
  name: 'ShoppingBagIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ShoppingCartIcon = {
  name: 'ShoppingCartIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SortAscendingIcon = {
  name: 'SortAscendingIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SortDescendingIcon = {
  name: 'SortDescendingIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SparklesIcon = {
  name: 'SparklesIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SpeakerphoneIcon = {
  name: 'SpeakerphoneIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var StarIcon = {
  name: 'StarIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var StatusOfflineIcon = {
  name: 'StatusOfflineIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var StatusOnlineIcon = {
  name: 'StatusOnlineIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var StopIcon = {
  name: 'StopIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SunIcon = {
  name: 'SunIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SupportIcon = {
  name: 'SupportIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SwitchHorizontalIcon = {
  name: 'SwitchHorizontalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var SwitchVerticalIcon = {
  name: 'SwitchVerticalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TableIcon = {
  name: 'TableIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TagIcon = {
  name: 'TagIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TemplateIcon = {
  name: 'TemplateIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TerminalIcon = {
  name: 'TerminalIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ThumbDownIcon = {
  name: 'ThumbDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ThumbUpIcon = {
  name: 'ThumbUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TicketIcon = {
  name: 'TicketIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TranslateIcon = {
  name: 'TranslateIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TrashIcon = {
  name: 'TrashIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TrendingDownIcon = {
  name: 'TrendingDownIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TrendingUpIcon = {
  name: 'TrendingUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var TruckIcon = {
  name: 'TruckIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      }
    }), h("path", {
      "attrs": {
        "d": "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UploadIcon = {
  name: 'UploadIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UserAddIcon = {
  name: 'UserAddIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UserCircleIcon = {
  name: 'UserCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UserGroupIcon = {
  name: 'UserGroupIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UserRemoveIcon = {
  name: 'UserRemoveIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UserIcon = {
  name: 'UserIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var UsersIcon = {
  name: 'UsersIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var VariableIcon = {
  name: 'VariableIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var VideoCameraIcon = {
  name: 'VideoCameraIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ViewBoardsIcon = {
  name: 'ViewBoardsIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ViewGridAddIcon = {
  name: 'ViewGridAddIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ViewGridIcon = {
  name: 'ViewGridIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ViewListIcon = {
  name: 'ViewListIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var VolumeOffIcon = {
  name: 'VolumeOffIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var VolumeUpIcon = {
  name: 'VolumeUpIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var WifiIcon = {
  name: 'WifiIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var XCircleIcon = {
  name: 'XCircleIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var XIcon = {
  name: 'XIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ZoomInIcon = {
  name: 'ZoomInIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

//import { h, reactive } from 'vue';
var ZoomOutIcon = {
  name: 'ZoomOutIcon',

  setup(props, context) {
    const h = this.$createElement;
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const myAttrs = context.attrs || {};
    myAttrs.width = context.attrs.width || size;
    myAttrs.height = context.attrs.height || size;
    context.attrs = myAttrs;
    return h("svg", _mergeJSXProps__default['default']([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 20 20",
        "fill": "currentColor"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "d": "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
        "clip-rule": "evenodd"
      }
    })]);
  },

  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  }
};

exports.AcademicCapIcon = AcademicCapIcon;
exports.AdjustmentsIcon = AdjustmentsIcon;
exports.AnnotationIcon = AnnotationIcon;
exports.ArchiveIcon = ArchiveIcon;
exports.ArrowCircleDownIcon = ArrowCircleDownIcon;
exports.ArrowCircleLeftIcon = ArrowCircleLeftIcon;
exports.ArrowCircleRightIcon = ArrowCircleRightIcon;
exports.ArrowCircleUpIcon = ArrowCircleUpIcon;
exports.ArrowDownIcon = ArrowDownIcon;
exports.ArrowLeftIcon = ArrowLeftIcon;
exports.ArrowNarrowDownIcon = ArrowNarrowDownIcon;
exports.ArrowNarrowLeftIcon = ArrowNarrowLeftIcon;
exports.ArrowNarrowRightIcon = ArrowNarrowRightIcon;
exports.ArrowNarrowUpIcon = ArrowNarrowUpIcon;
exports.ArrowRightIcon = ArrowRightIcon;
exports.ArrowUpIcon = ArrowUpIcon;
exports.ArrowsExpandIcon = ArrowsExpandIcon;
exports.AtSymbolIcon = AtSymbolIcon;
exports.BackspaceIcon = BackspaceIcon;
exports.BadgeCheckIcon = BadgeCheckIcon;
exports.BanIcon = BanIcon;
exports.BeakerIcon = BeakerIcon;
exports.BellIcon = BellIcon;
exports.BookOpenIcon = BookOpenIcon;
exports.BookmarkAltIcon = BookmarkAltIcon;
exports.BookmarkIcon = BookmarkIcon;
exports.BriefcaseIcon = BriefcaseIcon;
exports.CakeIcon = CakeIcon;
exports.CalculatorIcon = CalculatorIcon;
exports.CalendarIcon = CalendarIcon;
exports.CameraIcon = CameraIcon;
exports.CashIcon = CashIcon;
exports.ChartBarIcon = ChartBarIcon;
exports.ChartPieIcon = ChartPieIcon;
exports.ChartSquareBarIcon = ChartSquareBarIcon;
exports.ChatAlt2Icon = ChatAlt2Icon;
exports.ChatAltIcon = ChatAltIcon;
exports.ChatIcon = ChatIcon;
exports.CheckCircleIcon = CheckCircleIcon;
exports.CheckIcon = CheckIcon;
exports.ChevronDoubleDownIcon = ChevronDoubleDownIcon;
exports.ChevronDoubleLeftIcon = ChevronDoubleLeftIcon;
exports.ChevronDoubleRightIcon = ChevronDoubleRightIcon;
exports.ChevronDoubleUpIcon = ChevronDoubleUpIcon;
exports.ChevronDownIcon = ChevronDownIcon;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = ChevronRightIcon;
exports.ChevronUpIcon = ChevronUpIcon;
exports.ChipIcon = ChipIcon;
exports.ClipboardCheckIcon = ClipboardCheckIcon;
exports.ClipboardCopyIcon = ClipboardCopyIcon;
exports.ClipboardIcon = ClipboardIcon;
exports.ClipboardListIcon = ClipboardListIcon;
exports.ClockIcon = ClockIcon;
exports.CloudDownloadIcon = CloudDownloadIcon;
exports.CloudIcon = CloudIcon;
exports.CloudUploadIcon = CloudUploadIcon;
exports.CodeIcon = CodeIcon;
exports.CogIcon = CogIcon;
exports.CollectionIcon = CollectionIcon;
exports.ColorSwatchIcon = ColorSwatchIcon;
exports.CreditCardIcon = CreditCardIcon;
exports.CubeIcon = CubeIcon;
exports.CubeTransparentIcon = CubeTransparentIcon;
exports.CurrencyBangladeshiIcon = CurrencyBangladeshiIcon;
exports.CurrencyDollarIcon = CurrencyDollarIcon;
exports.CurrencyEuroIcon = CurrencyEuroIcon;
exports.CurrencyPoundIcon = CurrencyPoundIcon;
exports.CurrencyRupeeIcon = CurrencyRupeeIcon;
exports.CurrencyYenIcon = CurrencyYenIcon;
exports.CursorClickIcon = CursorClickIcon;
exports.DatabaseIcon = DatabaseIcon;
exports.DesktopComputerIcon = DesktopComputerIcon;
exports.DeviceMobileIcon = DeviceMobileIcon;
exports.DeviceTabletIcon = DeviceTabletIcon;
exports.DocumentAddIcon = DocumentAddIcon;
exports.DocumentDownloadIcon = DocumentDownloadIcon;
exports.DocumentDuplicateIcon = DocumentDuplicateIcon;
exports.DocumentIcon = DocumentIcon;
exports.DocumentRemoveIcon = DocumentRemoveIcon;
exports.DocumentReportIcon = DocumentReportIcon;
exports.DocumentSearchIcon = DocumentSearchIcon;
exports.DocumentTextIcon = DocumentTextIcon;
exports.DotsCircleHorizontalIcon = DotsCircleHorizontalIcon;
exports.DotsHorizontalIcon = DotsHorizontalIcon;
exports.DotsVerticalIcon = DotsVerticalIcon;
exports.DownloadIcon = DownloadIcon;
exports.DuplicateIcon = DuplicateIcon;
exports.EmojiHappyIcon = EmojiHappyIcon;
exports.EmojiSadIcon = EmojiSadIcon;
exports.ExclamationCircleIcon = ExclamationCircleIcon;
exports.ExclamationIcon = ExclamationIcon;
exports.ExternalLinkIcon = ExternalLinkIcon;
exports.EyeIcon = EyeIcon;
exports.EyeOffIcon = EyeOffIcon;
exports.FastForwardIcon = FastForwardIcon;
exports.FilmIcon = FilmIcon;
exports.FilterIcon = FilterIcon;
exports.FingerPrintIcon = FingerPrintIcon;
exports.FireIcon = FireIcon;
exports.FlagIcon = FlagIcon;
exports.FolderAddIcon = FolderAddIcon;
exports.FolderDownloadIcon = FolderDownloadIcon;
exports.FolderIcon = FolderIcon;
exports.FolderOpenIcon = FolderOpenIcon;
exports.FolderRemoveIcon = FolderRemoveIcon;
exports.GiftIcon = GiftIcon;
exports.GlobeAltIcon = GlobeAltIcon;
exports.GlobeIcon = GlobeIcon;
exports.HandIcon = HandIcon;
exports.HashtagIcon = HashtagIcon;
exports.HeartIcon = HeartIcon;
exports.HomeIcon = HomeIcon;
exports.IdentificationIcon = IdentificationIcon;
exports.InboxIcon = InboxIcon;
exports.InboxInIcon = InboxInIcon;
exports.InformationCircleIcon = InformationCircleIcon;
exports.KeyIcon = KeyIcon;
exports.LibraryIcon = LibraryIcon;
exports.LightBulbIcon = LightBulbIcon;
exports.LightningBoltIcon = LightningBoltIcon;
exports.LinkIcon = LinkIcon;
exports.LocationMarkerIcon = LocationMarkerIcon;
exports.LockClosedIcon = LockClosedIcon;
exports.LockOpenIcon = LockOpenIcon;
exports.LoginIcon = LoginIcon;
exports.LogoutIcon = LogoutIcon;
exports.MailIcon = MailIcon;
exports.MailOpenIcon = MailOpenIcon;
exports.MapIcon = MapIcon;
exports.MenuAlt1Icon = MenuAlt1Icon;
exports.MenuAlt2Icon = MenuAlt2Icon;
exports.MenuAlt3Icon = MenuAlt3Icon;
exports.MenuAlt4Icon = MenuAlt4Icon;
exports.MenuIcon = MenuIcon;
exports.MicrophoneIcon = MicrophoneIcon;
exports.MinusCircleIcon = MinusCircleIcon;
exports.MinusIcon = MinusIcon;
exports.MinusSmIcon = MinusSmIcon;
exports.MoonIcon = MoonIcon;
exports.MusicNoteIcon = MusicNoteIcon;
exports.NewspaperIcon = NewspaperIcon;
exports.OfficeBuildingIcon = OfficeBuildingIcon;
exports.PaperAirplaneIcon = PaperAirplaneIcon;
exports.PaperClipIcon = PaperClipIcon;
exports.PauseIcon = PauseIcon;
exports.PencilAltIcon = PencilAltIcon;
exports.PencilIcon = PencilIcon;
exports.PhoneIcon = PhoneIcon;
exports.PhoneIncomingIcon = PhoneIncomingIcon;
exports.PhoneMissedCallIcon = PhoneMissedCallIcon;
exports.PhoneOutgoingIcon = PhoneOutgoingIcon;
exports.PhotographIcon = PhotographIcon;
exports.PlayIcon = PlayIcon;
exports.PlusCircleIcon = PlusCircleIcon;
exports.PlusIcon = PlusIcon;
exports.PlusSmIcon = PlusSmIcon;
exports.PresentationChartBarIcon = PresentationChartBarIcon;
exports.PresentationChartLineIcon = PresentationChartLineIcon;
exports.PrinterIcon = PrinterIcon;
exports.PuzzleIcon = PuzzleIcon;
exports.QrcodeIcon = QrcodeIcon;
exports.QuestionMarkCircleIcon = QuestionMarkCircleIcon;
exports.ReceiptRefundIcon = ReceiptRefundIcon;
exports.ReceiptTaxIcon = ReceiptTaxIcon;
exports.RefreshIcon = RefreshIcon;
exports.ReplyIcon = ReplyIcon;
exports.RewindIcon = RewindIcon;
exports.RssIcon = RssIcon;
exports.SaveAsIcon = SaveAsIcon;
exports.SaveIcon = SaveIcon;
exports.ScaleIcon = ScaleIcon;
exports.ScissorsIcon = ScissorsIcon;
exports.SearchCircleIcon = SearchCircleIcon;
exports.SearchIcon = SearchIcon;
exports.SelectorIcon = SelectorIcon;
exports.ServerIcon = ServerIcon;
exports.ShareIcon = ShareIcon;
exports.ShieldCheckIcon = ShieldCheckIcon;
exports.ShieldExclamationIcon = ShieldExclamationIcon;
exports.ShoppingBagIcon = ShoppingBagIcon;
exports.ShoppingCartIcon = ShoppingCartIcon;
exports.SortAscendingIcon = SortAscendingIcon;
exports.SortDescendingIcon = SortDescendingIcon;
exports.SparklesIcon = SparklesIcon;
exports.SpeakerphoneIcon = SpeakerphoneIcon;
exports.StarIcon = StarIcon;
exports.StatusOfflineIcon = StatusOfflineIcon;
exports.StatusOnlineIcon = StatusOnlineIcon;
exports.StopIcon = StopIcon;
exports.SunIcon = SunIcon;
exports.SupportIcon = SupportIcon;
exports.SwitchHorizontalIcon = SwitchHorizontalIcon;
exports.SwitchVerticalIcon = SwitchVerticalIcon;
exports.TableIcon = TableIcon;
exports.TagIcon = TagIcon;
exports.TemplateIcon = TemplateIcon;
exports.TerminalIcon = TerminalIcon;
exports.ThumbDownIcon = ThumbDownIcon;
exports.ThumbUpIcon = ThumbUpIcon;
exports.TicketIcon = TicketIcon;
exports.TranslateIcon = TranslateIcon;
exports.TrashIcon = TrashIcon;
exports.TrendingDownIcon = TrendingDownIcon;
exports.TrendingUpIcon = TrendingUpIcon;
exports.TruckIcon = TruckIcon;
exports.UploadIcon = UploadIcon;
exports.UserAddIcon = UserAddIcon;
exports.UserCircleIcon = UserCircleIcon;
exports.UserGroupIcon = UserGroupIcon;
exports.UserIcon = UserIcon;
exports.UserRemoveIcon = UserRemoveIcon;
exports.UsersIcon = UsersIcon;
exports.VariableIcon = VariableIcon;
exports.VideoCameraIcon = VideoCameraIcon;
exports.ViewBoardsIcon = ViewBoardsIcon;
exports.ViewGridAddIcon = ViewGridAddIcon;
exports.ViewGridIcon = ViewGridIcon;
exports.ViewListIcon = ViewListIcon;
exports.VolumeOffIcon = VolumeOffIcon;
exports.VolumeUpIcon = VolumeUpIcon;
exports.WifiIcon = WifiIcon;
exports.XCircleIcon = XCircleIcon;
exports.XIcon = XIcon;
exports.ZoomInIcon = ZoomInIcon;
exports.ZoomOutIcon = ZoomOutIcon;
//# sourceMappingURL=index.cjs.js.map
