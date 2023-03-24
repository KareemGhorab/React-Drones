import { useForm, type SubmitHandler } from 'react-hook-form'

type Inputs = {
  search: string
}

export default function Search() {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs): void =>
    console.log(data)

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className='relative flex w-full' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='w-full rounded-r-full rounded-l-xl p-2 text-neutral-800'
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
