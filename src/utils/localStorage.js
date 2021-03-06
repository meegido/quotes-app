import React from 'react'

function useLocalStorageState(
  key, 
  initialValue = '', 
  {serialize = JSON.stringify, deserialize = JSON.parse} = {}) {
  const [state, setState] = React.useState(
    () => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage)
      }
      return typeof initialValue === 'function' ? initialValue() : initialValue
    }
  )

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }

    window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize])

    return [state, setState]
}

export {useLocalStorageState}
