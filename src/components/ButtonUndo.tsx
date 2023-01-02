import React from 'react'

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function ButtonUndo({
  onClick,
  ...restProps
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...restProps}
      onClick={(e) => onClick(e)}
      className="relative flex w-full justify-center rounded-md border border-transparent bg-transparent py-2 px-4 text-sm font-medium text-red-700 border-red-700 disabled:opacity-25 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
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
            d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
          />
        </svg>
      </span>
      Undo
    </button>
  )
}
