const vscode = require('vscode');
const path = require('path');
function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.copyLineInfo', function () {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const document = editor.document;
    const selection = editor.selection;
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
    const filePath = workspaceFolder
      ? path.relative(workspaceFolder.uri.fsPath, document.fileName)
      : document.fileName;
    const start = selection.start.line + 1;
    const end = selection.end.line + 1;

    let info = "";
    if (selection.isEmpty || start === end) {
    info = `@${filePath}, line ${start}`;
    } else {
    info = `@${filePath}, lines ${start}-${end}`;
    }

    vscode.env.clipboard.writeText(info);
    vscode.window.showInformationMessage("Copied: " + info);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
