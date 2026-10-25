export function useIsChristmasMonth() {
  const today = new Date();
  return today.getMonth() === 11;
}
