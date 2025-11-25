import DartVMMode from "./DartVMMode.js";

class Plugin {
  async onload() {
    editor.defineMode(DartVMMode);
  }

  onunload() {}
}

export default new Plugin();