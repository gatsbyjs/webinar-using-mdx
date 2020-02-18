import React from "react"

const Form = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form
