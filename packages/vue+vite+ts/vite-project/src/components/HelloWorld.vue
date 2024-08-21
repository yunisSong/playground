<script lang="jsx">
import { ref } from "vue";

export default {
  setup() {
    const count = ref("引入组件");
    return () => <Button>{count.value}</Button>;
  },
};
</script>

<!-- xie -->
