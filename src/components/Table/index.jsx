import React from 'react';

import { Container } from './styles';

function Table({ columns, children }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {columns?.map((th, index) => {
              return <th key={index}>{th}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>{children}</tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
