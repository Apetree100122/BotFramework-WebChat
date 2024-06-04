import { useEffect, useMemo } from 'react';
import { hooks } from 'botframework-webchat-api';

const { useStyleOptions } = hooks;

type InjectedStylesInstance = Readonly<{
  styles: readonly HTMLStyleElement[];
  nonce?: string;
  root: Node;
}>;

const sharedInstances: InjectedStylesInstance[] = [];

export default function useInjectStyles(styles: readonly HTMLStyleElement[], nonce?: string) {
  const [{ stylesRoot }] = useStyleOptions();

  const instance = useMemo(() => {
    const sharedInstance = sharedInstances.find(
      instance =>
        instance.styles.length === styles.length &&
        instance.styles.every(style => styles.includes(style)) &&
        instance.root === stylesRoot &&
        instance.nonce === nonce
    );
    const instance = sharedInstance ?? {
      nonce,
      styles: styles.some(style => style.parentNode)
        ? styles.map(style => style.cloneNode() as HTMLStyleElement)
        : styles,
      root: stylesRoot
    };

    if (!instance.root || !instance.styles.length) {
      return;
    }

    sharedInstances.push(instance);

    return instance;
  }, [stylesRoot, nonce, styles]);

  useEffect(() => {
    if (!instance) {
      return;
    }
    const { nonce, styles, root } = instance;
    for (const style of styles) {
      if (!style.parentNode) {
        nonce ? style.setAttribute('nonce', nonce) : style.removeAttribute('nonce');
        root.appendChild(style);
      }
    }

    return () => {
      const index = sharedInstances.lastIndexOf(instance);
      ~index && sharedInstances.splice(index, 1);
      if (!sharedInstances.includes(instance)) {
        for (const style of instance.styles) {
          style.remove();
        }
      }
    };
  }, [instance]);
}
