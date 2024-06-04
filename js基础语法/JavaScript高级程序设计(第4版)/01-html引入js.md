将 JavaScript 插入 HTML 的主要方法是使用 `<script>` 元素

在使用行内 JavaScript 代码时，要注意代码中不能出现字符串</script>。比如，下面的代码会导 致浏览器报错:

```
<script>
  function sayScript() {
    console.log("</script>");
}
</script>
```
