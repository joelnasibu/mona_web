import { ref, readonly } from 'vue';

function useResizeObserver(callback) {
  const resizeRef = ref();
  const contentRect = ref();
  return {
    resizeRef,
    contentRect: readonly(contentRect)
  };
}

export { useResizeObserver as u };
//# sourceMappingURL=resizeObserver-k8M9k6Xi.mjs.map
