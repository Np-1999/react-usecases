import React from 'react';
import Item from './Item';

const List = function List() {
  const students = [
    { Name: 'Nikhil', RollNo: '59' },
    { Name: 'Vitthal', RollNo: '34' },
    { Name: 'Omkar', RollNo: '1' },
    { Name: 'Suraj', RollNo: '58' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th> Name </th>
          <th> Roll No</th>
        </tr>
      </thead>
      <tbody>
        { students.map((student) => (
          <Item
            student={student}
            key={student.RollNo}
          />
        )) }
      </tbody>
    </table>
  );
};

export default List;
