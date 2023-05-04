import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <h1>UserX App</h1>
      <div>
        <h2>Welcome to UserX App</h2>
        <h3>Go to the app use this link:</h3>
        <Link to="/app">App</Link>
      </div>
    </div>
  )
}
