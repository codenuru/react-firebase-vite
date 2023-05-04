import { Link } from 'react-router-dom'

import { UserDeleteButton } from '@/features/UserDelete/components/UserDeleteButton'
import { type UserWithID } from '@/features/UserXApp/'

import './Table.css'

type TableProps = {
  users?: UserWithID[]
}

export const Table = ({ users }: TableProps) => {
  if (!users) return null
  return (
    <div>
      <p>(An example table + detail view scenario will be added)</p>
      <div className="responsive-table">
        <table>
          <caption>Our User</caption>
          <thead>
            <tr>
              <th scope="col" role="columnheader" data-title="ID">
                ID
              </th>
              <th scope="col" role="columnheader" data-title="First Name">
                First Name
              </th>
              <th scope="col" role="columnheader" data-title="Last Name">
                Last Name
              </th>
              <th scope="col" role="columnheader">
                Actions
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colSpan={4}>Year: 2023</th>
            </tr>
          </tfoot>
          <tbody>
            {users.map(({ id, firstName, lastName }) => (
              <tr key={id}>
                <td role="cell" data-title="ID">
                  <Link to={`/app/user/${id}`}>{id}</Link>
                </td>
                <td role="cell" data-title="Name">
                  {firstName}
                </td>
                <td role="cell" data-title="Surname">
                  {lastName}
                </td>
                <td role="cell" className="row-actions" data-title="Actions">
                  <button className="button">Edit</button>
                  <UserDeleteButton id={id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
