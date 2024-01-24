import React from 'react'
import { Flex, ItemContent, RadioGroupItem, RadioGroupRoot } from './styles'

type radioItems = {
  value: string
  name: string
}[]

interface SelectRadioGroupProps {
  radioItems: radioItems
}

export function SelectRadioGroup({ radioItems }: SelectRadioGroupProps) {
  return (
    <RadioGroupRoot defaultValue="default" aria-label="View density">
      {radioItems.map((item, i) => (
        <Flex key={i} css={{ alignItems: 'center' }}>
          <RadioGroupItem value={item.value} id={`r${i + 1}`}>
            <ItemContent>{item.name}</ItemContent>
          </RadioGroupItem>
        </Flex>
      ))}
    </RadioGroupRoot>
  )
}
