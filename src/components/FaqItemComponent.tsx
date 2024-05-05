import { useCallback, useState } from 'react';

const CollapseIcon = ({ open }: { open: boolean }) => (
  <div
    style={{
      opacity: 0.6,
      transform: open ? 'none' : 'rotate(45deg)',
      transformOrigin: '50% 50% 0px',
      height: '16px',
      width: '16px',
      // position: 'relative',
      // flex: 'none',
    }}
  >
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Close_MD">
          <path
            id="Vector"
            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  </div>
);

export interface FaqFrontmatter {
  question: string;
}

interface IProps {
  question: React.ReactNode;
  children: React.ReactNode;
}

export const FaqItemComponent = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpenCallback = useCallback((event: any) => {
    event.preventDefault();
    setOpen((prev) => !prev);
  }, []);
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold">
        <button
          onClick={toggleOpenCallback}
          className="flex w-full flex-row items-center gap-4 text-left"
        >
          <CollapseIcon open={open} />
          {props.question}
        </button>
      </h3>

      <div className={open ? '' : 'hidden'}>
        <div className="prose prose-invert mt-8 max-w-none text-gray-400 prose-img:rounded-lg">
          {props.children}
        </div>
      </div>
    </div>
  );
};
