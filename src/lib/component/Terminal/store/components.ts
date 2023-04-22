import { getContext, tick } from 'svelte';
import { Writable, get, writable } from 'svelte/store';
import { ComponentList, ComponentListKey } from '@/lib/component/Terminal/commands/map';
import { CONTEXT_KEY } from '../constant';

export interface Components {
  key: string;
  component: any;
  props: Record<string, unknown>;
}


export async function newComponent(
  components: Writable<Components[]>,
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
