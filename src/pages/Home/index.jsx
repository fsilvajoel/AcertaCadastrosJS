import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/index.jsx';

import { getLeads, getTiposEstadoCivil } from '../../services/api';
import { Base } from '../baseStyles';
import { BsPencil, BsTrash } from 'react-icons/bs';
function Home() {
  const [leads, setLeads] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const tableHead = ['ID', 'CPF', 'EMAIL', 'ESTADO CIVIL', 'NOME CONJUGUE'];

  useEffect(() => {
    getLeads().then((data) => {
      console.log('data', data);
      setLeads(data);
    });

    getTiposEstadoCivil().then((data) => {
      console.log('data', data);
      setMaritalStatus(data);
    });
  }, []);
  console.log('leads', leads);
  // console.log('setMaritalStatus', maritalStatus);
  return (
    <>
      <Base>
        <h1>Tela de Consulta</h1>
        <>
          <h1> Listagem de Leads</h1>
          <Table columns={tableHead}>
            {leads?.map((lead, key) => {
              return (
                <>
                  <td key={key}>
                    <BsPencil />
                  </td>
                  <td key={key}>
                    <BsTrash />
                  </td>
                  <td key={key}>{lead.id}</td>
                  <td key={key}>{lead.cpf}</td>
                  <td key={key}>{lead.email}</td>
                  <td key={key}>{lead.estadoCivil}</td>;<td key={key}>{lead.nome}</td>
                  <td key={key}>{lead.nomeConjugue}</td>;
                </>
              );
            })}
          </Table>
        </>
      </Base>
    </>
  );
}

export default Home;
