import { RefCallback, useCallback, useState } from 'react';

/**
 * @param referenceUpdaterToggle {any} - a variable that will trigger
 * recalculation of ref callback if its reference or value will change
 */
function useClientRect(referenceUpdaterToggle?: any): [
  RefCallback<HTMLElement>,
  ClientRect | null
] {
  const [boundingClientRect, setBoundingClientRect] = useState<ClientRect | null>(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setBoundingClientRect(node.getBoundingClientRect());
    }
  }, [referenceUpdaterToggle]); // eslint-disable-line
  return [ref, boundingClientRect];
}

export default useClientRect;
