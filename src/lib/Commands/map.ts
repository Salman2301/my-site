import Input from "./InputCommand.svelte";
import NoCommand from "./NoCommand.svelte";
import HelpCommand from "./HelpCommand.svelte";
import WhoamiCommand from "./WhoamiCommand.svelte";
import HistoryCommand from "./HistoryCommand.svelte";
import TimeCommand from "./TimeCommand.svelte";

export const ComponentList = {
  input: Input,
  noCommand: NoCommand,
  help: HelpCommand,
  whoami: WhoamiCommand,
  history: HistoryCommand,
  time: TimeCommand
} as const;

export type ComponentListKey = keyof typeof ComponentList;
