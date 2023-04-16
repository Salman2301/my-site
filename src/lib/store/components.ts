import { tick } from 'svelte';
import { Writable, get, writable } from 'svelte/store';
import { ComponentList, ComponentListKey } from '../commands/map';

interface Components {
  key: string;
  component: any;
  props: Record<string, unknown>;
}

export const components: Writable<Components[]> = writable([]);

export async function newComponent(
  key: ComponentListKey,
  props: Record<string, unknown> = {}
) {
  let $components = get(components);
  $components.push({
    key,
    component: ComponentList[key],
    props,
  });
  components.set($components);
  await tick();
}
