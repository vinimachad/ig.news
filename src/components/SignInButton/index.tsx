import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export const SignInButton = () => {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <>
      <button
        type='button'
        className={styles.signInButton}>
        <FaGithub color='#04d361' />
        vinimachad
        <FiX color='#737380' className={styles.logOutIcon} />
      </button>
    </>
  ) : (
    <>
      <button
        type='button'
        className={styles.signInButton}>
        <FaGithub color='#eba417' />
        Sign in with github
      </button>
    </>
  )
};
