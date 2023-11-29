export default function lastOf<T>(array: readonly T[]): T | undefined {
  return array[array.length - 1];
}
