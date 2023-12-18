import { useState } from 'react'

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue)

  const reset = () => setValue(initValue)

  const onValueChangeHandler = (event) => {
    setValue(event.target.value)
  }

  return [value, reset, onValueChangeHandler]
}
