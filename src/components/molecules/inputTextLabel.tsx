import React from 'react'
import { InputText } from '../atoms/inputtext'
import { Label } from '../atoms/label'

type props = {
  /**入力グループの識別ID */
  id: string
  /**入力欄の文字最大数 */
  maxLength: number
  /**項目名 */
  inputName: string
}

export const InputTextLabel = (props: props): JSX.Element => {
  return (
    <Label forId={props.id}>
      <p>{props.inputName}</p>
      <InputText id={props.id} maxLength={props.maxLength} />
    </Label>
  )
}
