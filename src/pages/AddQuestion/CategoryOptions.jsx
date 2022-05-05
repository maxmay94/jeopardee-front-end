import React, { Component } from "react"
import Select from "react-select"

// temp options
let options = [
  { id: 'Green', name: 'Green'},
  { id: 'Black', name: 'Black'},
  { id: 'Yellow', name: 'Yellow'},
  { id: 'Orange', name: 'Orange'}
]

export class CategoryOptions extends Component {
  render() {
    return (
      <Select
        options={options}
        // getOptionLabel={(options) => options['name']}
        // getOptionValue={(options) => options['id']}
      />
    )
  }
}
