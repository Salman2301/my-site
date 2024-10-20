import ErrorCommand from "./output/ErrorCommand.svelte";
import HelpCommand from "./output/HelpCommand.svelte";
import HistoryCommand from "./output/HistoryCommand.svelte";
import Input from "./InputCommand.svelte";
import SnakeCommand from "./output/game/SnakeCommand.svelte";
import ThemeCommand from "./output/ThemeCommand.svelte";
import TimeCommand from "./output/TimeCommand.svelte";
import WhoamiCommand from "./output/WhoamiCommand.svelte";

export const ComponentList = {
  input: Input,
  error: ErrorCommand,
  help: HelpCommand,
  whoami: WhoamiCommand,
  history: HistoryCommand,
  time: TimeCommand,
  theme: ThemeCommand,
  snake: SnakeCommand
} as const;

export type ComponentListKey = keyof typeof ComponentList;
