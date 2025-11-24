# DartVMMode

> Syntax highlighting for Dart VM assembler and `.dart` files

This module provides syntax highlighting for key constructs in DartVM assembler code and Dart files.

---

## Features

- Highlights DartVM assembler keywords (e.g., `blr`, `movk`, `fmov`, etc.)
- Recognizes registers (`w0`, `x1`, `SP`, `fp`, and others)
- Highlights directives, numeric values (including hex like `0x...`)
- Supports multiline comments `/* ... */`
- Highlights labels (`:label`), strings (`"string"`), and special tokens like `pp+0x...`
- Highlights jumps and return commands (`ret`, `b.eq`, `b.ne`, etc.)

---

## Color scheme

| Token type | Text color | Background color |
|------------|------------|------------------|
| keyword    | #0000FF    | #97A7C0          |
| register   | #0000FF    | #97A7C0          |
| directive  | #888888    | #FFFFFF          |
| number     | #19A800    | #FFFFFF          |
| label      | #DD7700    | #FFFFFF          |
| pp         | #FF00FF    | #FFFFFF          |
| jump       | #FF0000    | #FFFFFF          |
| return     | #FF0000    | #FFFFFF          |
| string     | #BA7F00    | #FFFFFF          |
| comment    | #888888    | #FFFFFF          |

---

## Usage

```js
import DartVMMode from './DartVMMode.js';

// Register the highlighting mode for .dart files
editor.defineMode(DartVMMode);
```

## Contributing

You are welcome to contribute with this plugin development. See the GitHub repo:
https://github.com/FlutterGenerator/dartvm-mode-acode-plugin

*Fun fact: I wrote this plugin with Acode* 😁

**Thanks for using this plugin. Hope you like it 🥰**