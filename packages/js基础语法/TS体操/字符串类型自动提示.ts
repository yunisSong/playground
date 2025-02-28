type color = "primary" | "secondary" | (string & {});

// 新版 vscode 下面这种写法也会自动提示了
type color1 = "primary" | "secondary";

const titleColor: color = "secondary";
