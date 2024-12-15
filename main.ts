// deno-lint-ignore no-explicit-any
const { Deno, process, window } = globalThis as any;
/**
 * Returns true if the current platform is Windows.
 * Returns false if it is not Windows or cannot be determined.
 *
 * @example
 * ```ts
 * console.log(isWindows());
 * ```
 */
export function isWindows(): boolean {
  return typeof Deno !== "undefined"
    ? Deno.build.os === "windows"
    : typeof process !== "undefined"
    ? process.platform === "win32"
    : window !== "undefined"
    ? window.navigator.userAgent.includes("Windows")
    : false;
}
