import axios from 'axios';

const url = 'http://http://a6b598025ebd843a599f63c5ad0c0e81-1899803292.us-east-1.elb.amazonaws.com/:30000';

export function getStudents() {
  return axios.get(url + '/etudiants/')
}

export function deleteStudent(studentId) {
  return axios.delete(`${url}/etudiant/${studentId}`)
    .then(response => response.data);
}

export function addStudent(student) {
  return axios.post(url + '/etudiant/', student)
    .then(response => response.data);
}

export function updateStudent(id, data) {
  return axios.put(`${url}/etudiant/${id}/`, data)
    .then(response => response.data);
}
