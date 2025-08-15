
import styles from './profileImage.module.css';

type profileImageProps={
    imagePath:  string
    alt?:   string
    size?: number
}

export const ProfileImage=({imagePath, alt: name="Foto de perfil", size = 100}:profileImageProps) => {
    return (
     <div className={styles.center}>
        <img src={imagePath} className={styles.profileImage} style={{width:size, height: size}}/>
        <div className={styles.name}>
            <h4 className={styles.center}>{name}</h4>
        </div>
     </div>

    );
};