import React from 'react'
import { Table } from 'react-bootstrap'

export const AdminScreen = () => {
  return (
    <div>
        <h1>AdminScreen</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Categoria </th>
              <th>Genero</th>
              <th>Certificado medico</th>
              <th>Fecha Nacimiento</th>
              <th>Pago</th>

            </tr>
          </thead>
          <tbody>
              <tr>
                <td>1</td>
                <td>Juan</td>
                <td>Perez</td>
                <td>12345678</td>
                <td>Master</td>
                <td>Hombre</td>
                <td>Si</td>
                <td>nacimiento</td>
                <td>completo</td>
              </tr>
          </tbody>
        </Table>
    </div>
  )
}
