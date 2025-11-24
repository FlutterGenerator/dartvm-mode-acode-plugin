const DartVMMode = {
  name: ["DartVM", ".dart"],
  comment: {
    startsWith: "•"
  },
  styles: [
    { name: "keyword", color: "#0000FF", background: "#97A7C0" },
    { name: "register", color: "#0000FF", background: "#97A7C0" },
    { name: "directive", color: "#888888", background: "#FFFFFF" },
    { name: "number", color: "#19A800", background: "#FFFFFF" },
    { name: "label", color: "#DD7700", background: "#FFFFFF" },
    { name: "pp", color: "#FF00FF", background: "#FFFFFF" },
    { name: "jump", color: "#FF0000", background: "#FFFFFF" },
    { name: "return", color: "#FF0000", background: "#FFFFFF" },
    { name: "string", color: "#BA7F00", background: "#FFFFFF" },
    { name: "comment", color: "#888888", background: "#FFFFFF" },
  ],
  contains: [
    {
      match: /\b(blr|sbfiz|movk|fmov|asr|scvtf|fdiv|fadd|fcmp|fcvtms|ldp|b\.ls|stur|and|ldurh|stp|sbfx|b\.hs|ldurb|ldur|tst|lsl|add|sub|mul|div|ldr|str|mov|cmp|bl|nop|udiv|smulh|umull|neg|adds|subs|orr|eor|bic|orn|lsr|ror|sxtw|ldrsw|sturh|mrs|msr|dmb|isb)\b/,
      token: "keyword"
    },
    {
      match: /\b(pp\+)(0x[\da-fA-F]+)\b/,
      token: "pp"
    },
    {
      match: /\b(w\d+|x\d+|SP|fp|sp|lr|pc)\b/,
      token: "register"
    },
    {
      match: /\b(LoadField|addr|size|EnterFrame|LeaveFrame|LoadClassIdInstr|DecompressPointer|NullCastErrorSharedWithoutFPURegs|CheckStackOverflow|LoadInt32Instr|throwWithStackTrace|platformExceptionToFirebaseException|StackOverflowSharedWithoutFPURegs|AllocStack|LoadTaggedClassIdMayBeSmiInstr)\b/,
      token: "directive"
    },
    {
      match: /\b(0x[\da-fA-F]+)\b/,
      token: "number"
    },
    {
      match: /\/\*[\s\S]*?\*\//,
      token: "comment"
    },
    {
      match: /\b(tbz|tbnz|cbz|cbnz|b\.eq|b\.ne|b|ccmp|ccmn|csel|csinc|csinv|csneg).*#0x[\da-fA-F]+\b/,
      token: "jump"
    },
    {
      match: /\b(ret|false|true|\/.*\.dart)\b/,
      token: "return"
    },
    {
      match: /:\w+/,
      token: "label"
    },
    {
      match: /\".*?\"/,
      token: "string"
    }
  ],
  // codeFormatter: BUILT_IN_ARMV8_FORMATTER // <- Закомментировано, так как не определено
};

export default DartVMMode;