import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

/**
 * Custom Fetch instance for making HTTP requests.
 * @type {import("axios").AxiosInstance}
 */
export const customFetch = axios.create({
  baseURL: productionUrl,
});

/**
 * Formats a number as a price with the specified currency and format type.
 * @param {number} number - The number to be formatted as a price.
 * @param {string} [currency="USD"] - The currency to be used for formatting. Defaults to "USD".
 * @param {string} [formatType="en-US"] - The format type to be used for formatting. Defaults to "en-US".
 * @returns {string} The formatted price.
 */
export const formatPrice = (number, currency = "USD", formatType = "en-US") => {
  const options = {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  };

  const numberFormat = new Intl.NumberFormat(formatType, options);

  return numberFormat.format(number / 100);
};

/**
 * Generates an array of options for a select input based on the specified length.
 *
 * @param {number} length - The length of the array to be generated.
 * @returns {JSX.Element[]} An array of JSX elements representing the options.
 */
export const generateAmount = (length) => {
  return Array.from({ length }, (_, index) => {
    const amountCount = index + 1;

    return (
      <option key={amountCount} value={amountCount}>
        {amountCount}
      </option>
    );
  });
};
