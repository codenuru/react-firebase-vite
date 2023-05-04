import { useState } from 'react'
import { useParams } from 'react-router'

import { Loading } from '@/components/Loading/'
import { UserUpdateForm } from '@/features/UserAdd/'
import { UserDeleteButton } from '@/features/UserDelete/components/UserDeleteButton'
import { useUserGet } from '@/features/UserDetail/hooks/useUserGet'
import { type UserWithID } from '@/features/UserXApp/'

import './UserDetail.css'

export const UserDetail = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { userId } = useParams()

  /* @ts-expect-error: todo */
  const { data: user, isLoading, isError, error: dataError } = useUserGet<UserWithID>(userId)
  if (isLoading) {
    return <Loading />
  }
  if (user === null || undefined) {
    return <span>Error: User Not Found</span>
  }
  if (isError) {
    return <span>Error: {dataError.message}</span>
  }
  const handleDeleteUser = () => {
    setIsEditing(true)
  }
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <div>
          <button onClick={() => handleDeleteUser()}>Edit</button>
          {isEditing && (
            <UserUpdateForm
              initialFirstName={user.firstName}
              initialLastName={user.lastName}
              docID={user.id}
            />
          )}
          <UserDeleteButton id={user.id} />
        </div>
      </div>
      <div className="profile profile-single">
        <div className="profile-image">
          <img src="https://placehold.it/200x200" alt="First Last" />
        </div>
        <div className="profile-details">
          <div className="profile-details-header">
            <div className="profile-name">{user.firstName}</div>
            <div className="profile-name">{user.lastName}</div>
            <div className="profile-title">Job Title</div>
          </div>
          <div className="profile-details-contact">
            <div className="profile-detail">
              <span className="detail-label">User ID</span>
              <span className="detail-data">{user.id}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Email</span>
              <span className="detail-data">xxxx@email.com</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Website</span>
              <span className="detail-data">Link to website</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Office</span>
              <span className="detail-data">Location</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Office Hours</span>
              <span className="detail-data">hours go here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
