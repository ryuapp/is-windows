# is-windows

Returns true if the current platform is Windows.\
It works with multiple JavaScript runtimes(Deno, Node.js, Bun) and browsers.

```ts
import { isWindows } from "@ryu/is-windows";

console.log(isWindows());
```

## Recipes

We can easily identify Windows without using this library.

### Deno

```ts
console.log(Deno.build.os === "windows");
```

### Node.js, Bun

```ts
console.log(process.platform === "win32");
```

## Browser

```ts
console.log(window.navigator.userAgent.includes("Windows"));
```
