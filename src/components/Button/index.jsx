import React from "react";
import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => (props.cancel ? "#989898" : "#F79028")};
  // Fundo botão cancelar: #989898;
  // Botão cadastrar e filtrar: #F79028;
`;
function Button({ label, cancel }) {
  return <Container cancel={cancel}>{label}</Container>;
}

export default Button;
