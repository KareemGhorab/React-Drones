import { useForm, type SubmitHandler } from 'react-hook-form'
import cn from 'classnames'

type Inputs = {
  search: string
}

interface Props {
  pillShaped?: boolean
}

export default function Search({ pillShaped = false }: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs): void =>
    console.log(data)

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className='relative flex w-full' onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`w-full rounded-r-full p-2 text-neutral-800 ${cn({
          'rounded-l-full': pillShaped,
          'rounded-l-xl': !pillShaped,
        })}`}
        placeholder='Search products...'
        {...register('search')}
      />
      <input
        className='absolute right-0 rounded-full bg-primary-700 px-3 py-2'
        type='submit'
        value='Search'
      />
    </form>
  )
}
