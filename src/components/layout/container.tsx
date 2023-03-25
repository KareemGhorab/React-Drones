import type { ReactElement } from 'react'

export default function Container({
  children,
  className = '',
}: {
  children: ReactElement
  className?: string
}) {
  return (
    <div className={className}>
      <div className='mx-auto w-full max-w-[92rem] px-4'>{children}</div>
    </div>
  )
}
