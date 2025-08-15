type DataProps={
    data: string,
    description:string
}

export const DataRow= ({data,description}:DataProps) => {
    return (
        <div>
            <h5><b>{data}</b>: {description}</h5>
        </div>
    );
};