import { ref } from "vue";
import Hello from "./HelloWorld.vue";
export default function MyComponent({ message }, { slots, emit, attrs }) {
  // console.log("message: ", message);
  // console.log("attrs: ", attrs);
  // console.log("emit: ", emit);
  // console.log("slots: ", slots);
  // console.log("props: ", props.count);
  const count = ref(12);
  return (
    <>
      <div>
        <Hello />
        count is: {count.value}
        {slots.default ? slots.default() : ""}
      </div>
    </>
  );
}
