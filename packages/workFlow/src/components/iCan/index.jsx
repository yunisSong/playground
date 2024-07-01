import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Hello, Vue 3 with TSX!</h1>
        <p>This is a sample component written in TSX.</p>
      </div>
    );
  },
});
