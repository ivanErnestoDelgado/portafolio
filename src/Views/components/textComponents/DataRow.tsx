import style from "./textComponents.module.css";

type DataProps={
    data: string,
    description:string
}

export const DataRow= ({data,description}:DataProps) => {
    return (
        <div className={style.dataRow}>
            <h5><b>{data}</b>: {description}</h5>
        </div>
    );
};