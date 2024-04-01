import { Combobox, Label } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

import { labelClasses } from './constants';

import type { Option, SelectComboProps } from './constants';

export const ComboBox = ({ label, options, defaultOption, name, controlled }: SelectComboProps) => {
  const def = defaultOption ?? options[0];
  const [query, setQuery] = useState('');
  const { selected, setSelected } = controlled ?? {};

  const filteredOptions =
    query === ''
      ? options
      : options.filter(option => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div>
      <Combobox
        name={name}
        // If controlled pass in useState, Combobox will use "onChange" and "value" (default will be handled in useState), otherwise it will use "defaultValue"
        {...(controlled && !!setSelected && selected
          ? { onChange: setSelected, value: selected }
          : { defaultValue: def })}
      >
        <Label className={labelClasses}>{label}</Label>
        <div className="relative mt-2">
          <Combobox.Input
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={event => {
              setQuery(event.target.value);
            }}
            displayValue={(option: Option) => option?.name}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>

          {filteredOptions.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredOptions.map(option => (
                <Combobox.Option
                  key={option.id || option.index}
                  value={option}
                  className={({ focus }) =>
                    clsx(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      focus ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ focus, selected }) => (
                    <>
                      <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {option.name}
                      </span>

                      {selected && (
                        <span
                          className={clsx(
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            focus ? 'text-white' : 'text-indigo-600',
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
    </div>
  );
};
