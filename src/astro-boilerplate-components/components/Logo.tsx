import type { ReactNode } from 'react';

type ILogoProps = {
  icon: ReactNode;
  name: string;
};

const Logo = (props: ILogoProps) => (
  <div className="flex items-center gap-x-3 text-lg font-semibold">
    {props.icon}

    {props.name}
  </div>
);

export { Logo };
