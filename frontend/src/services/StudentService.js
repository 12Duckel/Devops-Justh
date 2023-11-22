import axios from 'axios';

const url = 'http://192.168.58.2:30000';

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
