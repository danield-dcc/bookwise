import { useState } from 'react'

import { MagnifyingGlass } from 'phosphor-react'
import { InputWrapper } from './styles'

interface SearchInputProps {
  placeholder: string
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }
  return (
    <InputWrapper className={`${isFocused ? 'highlight-border' : ''}`}>
      <input
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <MagnifyingGlass className={`${isFocused ? 'highlight-border' : ''}`} />
    </InputWrapper>
  )
}
