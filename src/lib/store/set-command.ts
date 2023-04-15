import { tick } from 'svelte';
import { Writable, writable } from 'svelte/store';
import { components, newComponent } from './components';

export const availableCommands = {
  clear: {
    description: 'clears the terminal',
    action: ()=> components.set([])
  },
  help: {
    description: 'shows a list of available commands',
    action: ()=>newComponent("help")

  },
  whoami: {
    description: 'shows information about the site',
    action: ()=>newComponent("whoami")
  },
  history: {
    description: 'shows a list of commands you have used',
    action: ()=>newComponent("history")
  },
  time: {
    description: 'show the current time',
    action: () => newComponent("time")
  }
} as const;

export type CommandKey = keyof typeof availableCommands;

export const newCommandStore: Writable<string> = writable('');

export const historyCommands: Writable<string[]> = writable([]);

export async function setNewCommand(command: CommandKey | '') {
  if (command === '') newComponent('input');
  if (!command) return;

  historyCommands.update($history=>[...$history, command]);
  await handleCommand(command);
  await newComponent('input');
}

export async function handleCommand(command: CommandKey) {
  if (!command) return;
  if (!Object.keys(availableCommands).includes(command)) {
    newComponent('noCommand', { error: `command '${command}' not found` });
    return;
  }

  if (availableCommands[command].action) {
    availableCommands[command].action()
  }
  else 
    console.error("command not implemented?");
    
  await tick();
}
