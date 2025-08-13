
import styles from './profileImage.module.css';

type profileImageProps={
    imagePath:  string
    alt?:   string
    size?: number
}

export const ProfileImage=({imagePath, alt: name="Foto de perfil", size = 100}:profileImageProps) => {
    let path: string=imagePath;
    return (
     <div className={styles.center}>
        <img src={path} className={styles.profileImage} style={{width:size, height: size}}/>
        <div
        ><h4 className={styles.center}>{name}</h4>
        </div>
     </div>

    );
};