// deno-lint-ignore no-explicit-any
const { Deno, process } = globalThis as any;

// TODO: Support for Browser
export function isWindows(): boolean {
  return typeof Deno !== "undefined"
    ? Deno.build.os === "windows"
    : typeof process !== "undefined"
    ? process.platform === "win32"
    : false;
}
