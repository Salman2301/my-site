import Input from "./InputCommand.svelte";
import ErrorCommand from "./ErrorCommand.svelte";
import HelpCommand from "./HelpCommand.svelte";
import WhoamiCommand from "./WhoamiCommand.svelte";
import HistoryCommand from "./HistoryCommand.svelte";
import TimeCommand from "./TimeCommand.svelte";
import ThemeCommand from "./ThemeCommand.svelte";

export const ComponentList = {
  input: Input,
  error: ErrorCommand,
  help: HelpCommand,
  whoami: WhoamiCommand,
  history: HistoryCommand,
  time: TimeCommand,
  "theme-list": ThemeCommand
} as const;

export type ComponentListKey = keyof typeof ComponentList;
