import { ref } from "vue";

// export default {
//   setup(props, { attr }) {
//     debugger;
//     console.log("attr: ", attr);
//     console.log("props: ", props.count);
//     const count = ref(1);
//     return () => <div>count is: {count.value}</div>;
//   },
// };

export default function MyComponent({ msg }, { slots, emit, attrs }) {
  console.log("msg: ", msg);
  console.log("attrs: ", attrs);
  console.log("emit: ", emit);
  console.log("slots: ", slots);
  // console.log("props: ", props.count);
  const count = ref(12);
  return (
    <>
      <div>count is: {count.value}</div>
    </>
  );
}
