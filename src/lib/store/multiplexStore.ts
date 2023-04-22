import { Writable, get, writable } from "svelte/store";

const randomId = () => String(Date.now() * Math.random());

export type TerminalContainer = (TerminalContainerApp | TerminalContainerLayout);

export interface TerminalContainerApp {
  id: string;
  type: "app";
  name: string;
}

type TerminalLayoutMode = "horizontal" | "vertical";
export interface TerminalContainerLayout {
  id: string;
  type: "layout";
  mode: TerminalLayoutMode;
  children: TerminalContainer[];
}

export const terminalMultiplexStore: Writable<TerminalContainer[]> =
  writable([
    {
      id: randomId(),
      type: "app",
      name: "main"
    }
  ]);

  export function removeTerminal(id: string) {
    let $terminalMultiplexStore = get(terminalMultiplexStore);
    function removeTerminal($terminalMultiplexStore) {
      return $terminalMultiplexStore.map(item => {
        if (item.type === "layout") {
          let foundItem = item.children.find(e => e.id === id);
          if (foundItem) return foundItem;
          return { ...item, children: removeTerminal(item.children) };
        }
        return item;
      });
    }
    $terminalMultiplexStore = removeTerminal($terminalMultiplexStore);
    terminalMultiplexStore.set($terminalMultiplexStore); 
  }


export function addLayout(mode: TerminalLayoutMode, id: string) {
  let $terminalMultiplexStore = get(terminalMultiplexStore);
  
  let newAppId = randomId();
  const newReplacement = oldItem => {
    return {
      id: randomId(),
      type: "layout",
      mode,
      children: [
        oldItem,
        {
          id: newAppId,
          type: "app",
          name: "app-" + newAppId
        }
      ]
    }
  }

  function createNewTerminal($terminalMultiplexStore) {
    return $terminalMultiplexStore.map(item => {
      if (item.type === "layout") return { ...item, children: createNewTerminal(item.children) };
      if (item.id === id) return newReplacement(item);
      return item;
    })
  }
  
  $terminalMultiplexStore = createNewTerminal($terminalMultiplexStore);
  
  terminalMultiplexStore.set($terminalMultiplexStore);
}
