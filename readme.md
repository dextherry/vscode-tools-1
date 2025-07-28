# Copy Line Info

This is a simple Visual Studio Code extension that copies the current file path (relative to the workspace) and the selected line number(s) to your clipboard.

## Features

- Copies the relative file path and:
  - The current line number if no selection is made.
  - The range of selected lines if a block is selected.

## Example Output

src/utils/parser.js, line 12

## Usage

1. Select a line or range of lines in any file.
2. Run the command: `Copy Line Info` from the Command Palette (`Ctrl+Shift+P`).
3. The result is copied to your clipboard and shown in a notification.

## Keybinding (optional)

You can add a custom keybinding to trigger the command automatically:

```json
{
  "key": "ctrl+alt+c",
  "command": "extension.copyLineInfo",
  "when": "editorTextFocus"
}```


## Settings
Add in VSCode settings:

"multiCommand.commands": [
  {
    "command": "multiCommand.copyFileAndLineInfo",
    "sequence": [
      {
        "command": "editor.action.clipboardCopyAction"
      },
      {
        "command": "workbench.action.terminal.sendSequence",
        "args": {
          "text": "\u001b[200~${fileBasename}, líneas ${lineStart}-${lineEnd}\u001b[201~"
        }
      }
    ]
  }
]