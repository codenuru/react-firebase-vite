import { useNavigate } from 'react-router-dom'

import { useUserDelete } from '@/features/UserDelete/hooks/useUserDelete'
import { type ID } from '@/types/commonPropTypes'

export const UserDeleteButton = (props: ID) => {
  const navigate = useNavigate()
  const { mutate: deleteUser } = useUserDelete({
    onSuccess: () => {
      navigate('/app')
    },
  })

  const handleDeleteUser = () => {
    const isConfirmed = window.confirm(
      'This user will be deleted.\nThis is irreversible. Are you sure?',
    )
    if (!isConfirmed) return
    deleteUser(props.id)
  }
  return (
    <>
      <button className="button" onClick={() => handleDeleteUser()}>
        Delete
      </button>
    </>
  )
}
