import { ref } from "vue";
interface props {
  message: string;
  count: number;
  changeCount: (count: number) => void;
}

// TODO ss

export default function MyComponent(props: props, { slots, emit, attrs }) {
  return (
    <div>
      <div class="bg-white shadow-md rounded-lg p-4 border md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div>
          <div>{slots.footer ? slots.head({ text: props.message }) : ""}</div>
          count is: {props.count}
          {slots.default && slots.default()}
          {slots.footer ? slots.footer() : ""}
          <button onClick={() => emit("changeCount", props.count + 1)}>
            change count
          </button>
        </div>
      </div>
    </div>
  );
}
