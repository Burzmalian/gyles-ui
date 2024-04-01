import type { Dispatch, SetStateAction } from 'react';

export const labelClasses = 'block text-sm font-medium leading-6 text-gray-900';
export const formClasses = 'space-y-6 pb-5 pt-6 px-4 sm:px-6';

export type Option = {
  id: number | string;
  name: string;
  index?: string;
};

export type SelectComboProps = {
  label: string;
  options: Option[];
  // Only used if not controlled
  defaultOption?: Option;
  name: string;
  controlled?: {
    selected: Option;
    setSelected: Dispatch<SetStateAction<Option>>;
  };
};
