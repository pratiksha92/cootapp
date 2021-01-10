import React from "react";
import { Select } from "antd";
const { Option } = Select;

export default function MultipleCheckbox() {
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  return (
    <div>
      {" "}
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={[]}
        onChange={handleChange}
      >
        <Option value="1024">Amazon</Option>
        <Option value="213">Netflixi</Option>
      </Select>
    </div>
  );
}
