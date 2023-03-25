import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from 'react'

const useToggle = (
  initialState = false
): {
  state: boolean
  toggle: Dispatch<SetStateAction<void>>
  on: Dispatch<SetStateAction<void>>
  off: Dispatch<SetStateAction<void>>
} => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = useCallback((): void => setState((state) => !state), [])
  const on = useCallback((): void => setState(true), [])
  const off = useCallback((): void => setState(false), [])
  return { state, toggle, on, off }
}

export default useToggle
