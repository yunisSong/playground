import { ref } from "vue";
// 实现一个 Segmented 组件，传入的 props 为 一个 modelValue，itemList,需要显示 itemList内容
export default function Segmented(props, { slots, emit, attrs }) {
  return (
    <>
      <div>
        {props.itemList.map((item) => (
          <button
            onClick={() => {
              console.log(item.value);
              props.modelValue = item.value;
              emit("update:modelValue", item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {slots.default ? slots.default() : ""}
    </>
  );
}
