import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {

    //const { nome } = props;

    /*const usurario = {
        nome: 'Carlos Alves',
        avatar: 'https://avatars.githubusercontent.com/u/25256504?v=4'
    }*/

    return(
        <header className={styles.header}>
            <img src={`https://github.com/${nomeUsuario}.png`} className={styles.avatar} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;