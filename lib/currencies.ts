export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "KSH", label: "  KES", locale: "en-GB" },
  { value: "TSH", label: "  TZS", locale: "en-GB" },
  { value: "UGSH", label: "    UGX", locale: "en-GB" },
];

export type Currency = (typeof Currencies)[0];
