import { ref } from "vue";

export default function MyComponent({ msg }, { slots, emit, attrs }) {
  console.log("msg: ", msg);
  console.log("attrs: ", attrs);
  console.log("emit: ", emit);
  console.log("slots: ", slots);
  // console.log("props: ", props.count);
  const count = ref(12);
  // 这里可以只处理逻辑 比如 数据的处理。组件是否展示，组件的样式等
  return (
    <>
      <div>{slots.default ? slots.default() : ""}</div>
    </>
  );
}
