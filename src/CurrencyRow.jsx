const CurrencyRow = ({ currencyOptions }) => {
  return (
    <div>
      <input type="number" className="input" />
      <select name="currency-select" id="">
        {currencyOptions.map((cur, index) => {
          return (
            <option key={index} value={cur}>
              {cur}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default CurrencyRow;
