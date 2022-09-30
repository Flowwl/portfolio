import { MutableRefObject, useMemo, useRef } from "react";
import gsap from "gsap";

export function useSelector2(): [gsap.utils.SelectorFunc, MutableRefObject<any>] {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}
