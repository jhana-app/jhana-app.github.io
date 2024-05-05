import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-row items-center justify-between gap-y-3">
    {props.children}
  </div>
);

export { NavbarTwoColumns };
