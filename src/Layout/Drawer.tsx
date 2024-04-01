import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

export const Drawer = ({
  children,
  open,
  setOpen,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Transition.Root unmount={false} show={open} as={Fragment}>
      <Dialog unmount={false} as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 top-16 flex max-w-full pl-10 sm:pl-16 lg:top-0">
              <Transition.Child
                as={Fragment}
                unmount={false}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">{children}</Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

type DrawerHeaderProps = {
  title: string;
  description?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerHeader = ({ title, description, setOpen }: DrawerHeaderProps) => {
  return (
    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between">
        <Dialog.Title className="text-base font-semibold leading-6 text-white">{title}</Dialog.Title>
        <div className="-mr-1.5 ml-3 flex h-7 items-center">
          <button
            type="button"
            className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => {
              setOpen(false);
            }}
          >
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Close panel</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {description && (
        <div className="mt-1">
          <p className="text-sm text-indigo-300">{description}</p>
        </div>
      )}
    </div>
  );
};

Drawer.Header = DrawerHeader;
