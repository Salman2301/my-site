import { tick } from "svelte";
import { newComponent } from "../store/components";

/**
 * Theme set five colors in this order
 * 1. background 1
 * 2. background 2
 * 3. hight light 1
 * 4. text 1
 * 5. text 2
 */

export let themes = {
  "default-dark": ["#000", "#696969", "#EF4444", "#A0A0A0", "#FFF"],
  "default-light": ["#FFF", "#A0A0A0", "#EF4444", "#696969", "#000"],
  "dracula": ["#282a36", "#44475a", "#000", "#f8f8f2", "#ff5555"],
  "solarized-dark": ["#002b36", "#073642", "#586e75", "#839496", "#eee8d5"],
  "solarized-light": ["#fdf6e3", "#eee8d5", "#b58900", "#657b83", "#002b36"],
  "gruvbox-dark": ["#282828", "#3c3836", "#fb4934", "#ebdbb2", "#fbf1c7"],
} as const


type THEME_NAME = keyof typeof themes;
// type ThemeColors = Record <THEME_NAME, [string, string, string, string, string]>;


export async function setTheme(command: string) {
  if(!command) return;
  const [_, name] = command.split(" ");
  if (name === undefined) {
    newComponent("theme-list");
  }
  else  if (name in themes) {
    const [bg1, bg2, hl1, t1, t2] = themes[name];
    document.documentElement.style.setProperty("--bg1", bg1);
    document.documentElement.style.setProperty("--bg2", bg2);
    document.documentElement.style.setProperty("--hl1", hl1);
    document.documentElement.style.setProperty("--t1", t1);
    document.documentElement.style.setProperty("--t2", t2);

    await tick();

    localStorage.setItem("curr-theme", command)
  }
  else {
    newComponent("error", { message: `Theme ${name} not found`})
  }
}