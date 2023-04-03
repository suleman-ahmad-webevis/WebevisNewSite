import React from "react"
import { Buton } from "./Button.styles"

export default function Button({ text, content, color,margin,colour }) {
  return (
    <Buton content={content} color={color} margin={margin} colour={colour}>
      <button> {text}</button>
    </Buton>
  )
}
