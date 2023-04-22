import { tick } from 'svelte';
import { Components, newComponent } from './components';
import { Writable, get } from 'svelte/store';
import { setTheme, themes } from '@/lib/store/theme';
import { addLayout, removeTerminal } from '@/lib/store/multiplexStore';


export const availableCommands = {
  clear: {
    description: 'clears the terminal',
    action: (components) => components.set([]),
  },
  help: {
    description: 'shows a list of available commands',
    action: (components) => newComponent(components, 'help'),
  },
  whoami: {
    description: 'shows information about the site',
    action: (components) => newComponent(components, 'whoami'),
  },
  history: {
    description: 'shows a list of commands you have used',
    action: (components) => newComponent(components, 'history'),
  },
  time: {
    description: 'show the current time',
    action: (components) => newComponent(components, 'time'),
  },
  theme: {
    description: 'set the theme for the page',
    action: (components, command) => setThemeCommand(components, command),
  },
  split: {
    description: 'split the terminal into two',
    action: (components, command) => splitCommand(components, command),
  },
  exit: {
    description: 'exit the terminal',
    action: (components) => exitCommand(components, 'exit'),
  }
} as const;

export type CommandKey = keyof typeof availableCommands;

export async function setNewCommand(components:Writable<Components[]>, historyCommands: Writable<string[]>, command: any) {
  if (command === '') newComponent(components, 'input');
  if (!command) return;

  historyCommands.update($history => [...$history, command]);
  await handleCommand(components, command);
  await newComponent(components, 'input');
}


export function setThemeCommand(component, command: string) {
  if(!command) return;
  const [_, name] = command.split(" ");
  if (name === undefined) {
    newComponent(component, "theme");
  }
  else  if (name in themes) {
    setTheme(command)
  }
  else {
    newComponent(component, "error", { message: `Theme ${name} not found`})
  }
}

export function splitCommand(component, command) {
  const terminalId = getTerminalId(component);
  const [ _, mode ] = command.split(" ");
  if( mode === "v" ) addLayout("vertical", terminalId);
  else if( mode === "h" || mode === undefined ) addLayout("horizontal", terminalId);
}

export function exitCommand(component, command) {
  const terminalId = getTerminalId(component);
  removeTerminal(terminalId);
}

function getTerminalId(component): string {
  
  const $component:[Components] = get(component);
  const instance = $component[0].props.componentInstance;
  if (!instance) return;
  const terminalId = (instance as HTMLElement)?.parentElement?.getAttribute?.("data-terminal-id");
  return terminalId;
}

export async function handleCommand(components: Writable<Components[]>,command: CommandKey) {
  if (!command) return;
  const [firstWord] = command.split(' ');
  if (!Object.keys(availableCommands).includes(firstWord)) {
    newComponent(components, 'error', { message: `command '${command}' not found` });
    return;
  }

  if (availableCommands[firstWord].action) {
    availableCommands[firstWord].action(components, command);
  } else console.error('command not implemented?');

  await tick();
}
