import React from 'react';
import { Input } from 'native-base';

export const Example = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
