import { defineComponent, h } from 'vue';

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    // return () => h('h' + props.level, {}, slots.default());
    let tag = 'h' + props.level;
    return () => <tag>{slots.default()}</tag>;
  },
});
