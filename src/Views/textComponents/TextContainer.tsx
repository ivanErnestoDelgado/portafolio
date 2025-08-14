import type { JSX } from "react";

type textContainerProps={
    textItems: JSX.Element[];
}

export const TextContainer= ({textItems}:textContainerProps) => {
    
    return(
        <div>
            <hr />
            <div>
                {textItems}
            </div>
            <hr />
        </div>
    );
}