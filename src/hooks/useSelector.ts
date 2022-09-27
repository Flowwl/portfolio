import { MutableRefObject, useMemo, useRef } from "react";
import gsap from "gsap";

export function useSelector(): [gsap.utils.SelectorFunc, MutableRefObject<unknown>] {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}
