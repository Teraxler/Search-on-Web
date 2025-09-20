import React from 'react'

export default function useAutoUpdater(state, fallBack) {

  useEffect(() => {
    fallBack()
    setSuggestions(data.suggestions);
  }, [state]);

  return (
    <div>useUpdater</div>
  )
}
