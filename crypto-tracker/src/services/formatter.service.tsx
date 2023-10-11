import React from 'react';

interface FormattedNumberProps {
  number: number;
}

const FormattedNumber: React.FC<FormattedNumberProps> = ({ number }) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  return <span className="number-separator font-bold">{formattedNumber}</span>;
};

export default FormattedNumber;

export function formatNumberToTwoDecimals(number: number) {
  return <span className={number < 0 ? 'number-separator font-bold text-red-500' : 'number-separator font-bold text-green-500'}>{number.toFixed(2)}</span>;
}



