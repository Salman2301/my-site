
export type TerminalContainer = (TerminalContainerApp | TerminalContainerLayout);

interface TerminalContainerApp {
  id: string;
  type: "app";
  name: string;
}

export interface TerminalContainerLayout {
  id: string;
  type: "layout";
  mode: "horizontal" | "vertical";
  children: TerminalContainer[];
}

export const terminalContainer: TerminalContainer[] = [
  {
    id: '1',
    type: 'layout',
    mode: 'vertical',
    children: [
      {
        id: '2',
        type: 'layout',
        mode: 'horizontal',
        children: [
          {
            id: '3',
            type: 'app',
            name: 'random',
          },
          {
            id: '4',
            type: 'app',
            name: 'random',
          },
        ],
      },
      {
        id: '7',
        type: "app",
        name: "random"
      }
    ],
  }
];

// export const terminalContainer: TerminalContainer[] = [
//   {
//     id: "1",
//     type: "layout",
//     mode: "vertical",
//     children: [
//       {
//         id: "2",
//         type: "app",
//         name: "random",
//       },
//       {
//         id: "3",
//         type: "app",
//         name: "random"
//       }
//     ]
//   }
// ]