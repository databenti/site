import currencyJs from "currency.js";

function getOptionsFromCurrencyName(currencyName) {
  switch (currencyName) {
    case "euro":
      return {
        symbol: "€",
        decimal: ",",
        separator: "."
      };

    case "dollar":
      return {
        symbol: "Us$",
        decimal: ".",
        separator: ","
      };
    case "real":
    default:
      return {
        symbol: "R$",
        decimal: ",",
        separator: "."
      };
  }
}

export const formatCurrency = (value, currencyName, options) =>
  currencyJs(value, {
    ...getOptionsFromCurrencyName(currencyName),
    ...options
  }).format();

const costValue = 89.69999694824219;

export default function IndexPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Price in Brazilian real: {formatCurrency(costValue, "real")}</span>
      <span>Price in US dolars: {formatCurrency(costValue, "dollar")}</span>
      <span>Price in Euros: {formatCurrency(costValue, "euro")}</span>
    </div>
  );
}
