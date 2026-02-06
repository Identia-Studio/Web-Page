'use client'
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <InlineWidget
      url="https://calendly.com/identiastudio25/30min"
      styles={{
        height: '1000px',
        width: 500,
      }}
      className="rounded mx-auto"
    />
  )
}
