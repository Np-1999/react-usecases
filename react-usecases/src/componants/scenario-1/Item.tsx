import React from 'react';

interface Student {
  Name: string;
  RollNo: string;
}
const Item = function Item(props: { student: Student }) {
  const { student } = props;

  return (
    <tr>
      <td>{student.Name}</td>
      <td>{student.RollNo}</td>
    </tr>
  );
};

export default Item;
