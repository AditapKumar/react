import styles from'./Navigation.module.css'

const Navigation = () => {

  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation;
