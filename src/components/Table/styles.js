import styled from 'styled-components';

// import colors, { shaddow } from '../../shared/styles/Colors';
const colors = {
  grayLight: '#c1c1c1',
  grayStrong: '#000',
  white: '#ff',
};

export const Container = styled.div`
  .table-header {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  table {
    width: 100%;
    border: none;
    border-spacing: 0;
    margin-top: 10px;
    thead {
      color: ${colors.grayStrong};
      background-color: ${colors.grayLight};
      border: 0;
      tr {
        height: 40px;
        th {
          text-align: center;
          vertical-align: middle;
          font-family: 'Roboto Bold';
          font-size: 0.8rem;
          padding: 5px;
          border: 0;
        }
      }
    }

    tbody {
      font-size: 0.8rem;
      color: ${colors.grayStrong};
      background-color: ${colors.white};
      tr {
        :not(:first) {
        }
        height: 60px;
        border-bottom: 2px solid black;
        td {
          text-align: center;
          font-family: 'Roboto';
          padding: 5px;
          border-bottom: 2px solid ${colors.grayLight};

          button {
            i {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
`;
