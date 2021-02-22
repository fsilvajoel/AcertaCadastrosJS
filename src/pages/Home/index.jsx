import React, { useEffect, useState } from 'react';

import { getLeads, getTiposEstadoCivil } from '../../shared/services/api';
import { Base } from '../baseStyles';
function Home() {
  const [leads, setLeads] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState([]);

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
  console.log('setMaritalStatus', maritalStatus);
  return (
    <>
      <Base>
        <h1>Tela de Consulta</h1>
        {/* {leads.length && (
          <>
            <h1> hello</h1>
            {leads?.map((lead, key) => {
              return <h1 key={key}>{lead}</h1>;
            })}
          </>
        )} */}
      </Base>
    </>
  );
}

export default Home;
