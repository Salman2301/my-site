import { tick } from 'svelte';
import { Writable, writable } from 'svelte/store';
import { components, newComponent } from './components';
import { setTheme } from '../commands/output/ThemeCommand.svelte';

export const availableCommands = {
  clear: {
    description: 'clears the terminal',
    action: () => components.set([]),
  },
  help: {
    description: 'shows a list of available commands',
    action: () => newComponent('help'),
  },
  whoami: {
    description: 'shows information about the site',
    action: () => newComponent('whoami'),
  },
  history: {
    description: 'shows a list of commands you have used',
    action: () => newComponent('history'),
  },
  time: {
    description: 'show the current time',
    action: () => newComponent('time'),
  },
  theme: {
    description: 'set the theme for the page',
    action: cmd => setTheme(cmd),
  },
} as const;

export type CommandKey = keyof typeof availableCommands;

export const newCommandStore: Writable<string> = writable('');

export const historyCommands: Writable<string[]> = writable([]);

export async function setNewCommand(command: any) {
  if (command === '') newComponent('input');
  if (!command) return;

  historyCommands.update($history => [...$history, command]);
  await handleCommand(command);
  await newComponent('input');
}

export async function handleCommand(command: CommandKey) {
  if (!command) return;
  const [firstWord] = command.split(' ');
  if (!Object.keys(availableCommands).includes(firstWord)) {
    newComponent('error', { message: `command '${command}' not found` });
    return;
  }

  if (availableCommands[firstWord].action) {
    availableCommands[firstWord].action(command);
  } else console.error('command not implemented?');

  await tick();
}
