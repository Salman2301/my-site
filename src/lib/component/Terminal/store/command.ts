import { tick } from 'svelte';
import { Components, newComponent } from './components';
import type { Writable } from 'svelte/store';
import { setTheme, themes } from '@/lib/store/theme';


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
} as const;

export type CommandKey = keyof typeof availableCommands;

export async function setNewCommand(components:Writable<Components[]>, historyCommands: Writable<string[]>, command: any) {
  if (command === '') newComponent(components, 'input');
  if (!command) return;

  historyCommands.update($history => [...$history, command]);
  await handleCommand(components, command);
  await newComponent(components, 'input');
}


export async function setThemeCommand(component, command: string) {
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
