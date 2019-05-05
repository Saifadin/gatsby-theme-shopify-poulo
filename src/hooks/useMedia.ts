import { useState, useEffect, useLayoutEffect, DependencyList, EffectCallback } from 'react';

interface MediaQueryObject {
  [key: string]: string | number | boolean;
}
type Effect = (effect: EffectCallback, deps?: DependencyList) => void;

const camelToHyphen = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).toLowerCase();

const objectToString = (query: string | MediaQueryObject) => {
  if (typeof query === 'string') return query;
  return Object.entries(query)
    .map(([feature, value]) => {
      feature = camelToHyphen(feature);
      if (typeof value === 'boolean') {
        return value ? feature : `not ${feature}`;
      }
      if (typeof value === 'number' && /[height|width]$/.test(feature)) {
        value = `${value}px`;
      }
      return `(${feature}: ${value})`;
    })
    .join(' and ');
};

const createUseMedia = (effect: Effect) => (rawQuery: string | MediaQueryObject, defaultState: boolean = false) => {
  const [state, setState] = useState(defaultState);
  const query = objectToString(rawQuery);

  effect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

export const useMedia = createUseMedia(useEffect);
export const useMediaLayout = createUseMedia(useLayoutEffect);

export default useMedia;
