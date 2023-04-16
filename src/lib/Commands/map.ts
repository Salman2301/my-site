import Input from "./InputCommand.svelte";
import ErrorCommand from "./output/ErrorCommand.svelte";
import HelpCommand from "./output/HelpCommand.svelte";
import WhoamiCommand from "./output/WhoamiCommand.svelte";
import HistoryCommand from "./output/HistoryCommand.svelte";
import TimeCommand from "./output/TimeCommand.svelte";
import ThemeCommand from "./output/ThemeCommand.svelte";

export const ComponentList = {
  input: Input,
  error: ErrorCommand,
  help: HelpCommand,
  whoami: WhoamiCommand,
  history: HistoryCommand,
  time: TimeCommand,
  theme: ThemeCommand
} as const;

export type ComponentListKey = keyof typeof ComponentList;
