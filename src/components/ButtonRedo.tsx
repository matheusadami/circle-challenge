interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function ButtonRedo({
  onClick,
  ...restProps
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...restProps}
      onClick={(e) => onClick(e)}
      className="relative flex w-full justify-center rounded-md border border-transparent bg-transparent ml-5 py-2 px-4 text-sm font-medium text-indigo-700 border-indigo-700 disabled:opacity-25 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span className="pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
          />
        </svg>
      </span>
      Redo
    </button>
  )
}
