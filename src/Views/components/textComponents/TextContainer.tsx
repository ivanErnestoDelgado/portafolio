import style from "./textComponents.module.css";
import type { JSX } from "react";

type textContainerProps={
    textItems: JSX.Element[];
}

export const TextContainer= ({textItems}:textContainerProps) => {
    
    return(
        <div>
            <hr className={style.segmentationLine}/>
            <div>
                {textItems}
            </div>
            <hr className={style.segmentationLine}/>
        </div>
    );
}