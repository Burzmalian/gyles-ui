import { labelClasses } from './constants';

type TextAreaProps = {
  label: string;
  rows?: number;
  name: string;
  defaultValue?: string;
  maxLength?: number;
};

export const TextArea = ({ label, rows = 4, name, defaultValue = '', maxLength = 20 }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={defaultValue}
        maxLength={maxLength}
      />
    </div>
  );
};
