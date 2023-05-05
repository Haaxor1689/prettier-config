/** @type {import("prettier").Config} */
const config = {
  $schema: "http://json.schemastore.org/prettierrc",
	useTabs: true,
  singleQuote: true,
  quoteProps: "consistent",
  trailingComma: "none",
  arrowParens: "avoid",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
