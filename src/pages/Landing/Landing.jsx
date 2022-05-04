import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1 className='bg-blue-600 px-10'>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
