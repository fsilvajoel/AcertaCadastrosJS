import axios from 'axios';

export const acertaLeads = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function getLeads() {
  const response = await acertaLeads.get(`/leads/`).catch((err) => Promise.reject(new Error(err)));
  return response.data;
}
export async function getTiposEstadoCivil() {
  const response = await acertaLeads.get(`/tiposEstadoCivil/`).catch((err) => Promise.reject(new Error(err)));
  return response.data;
}
