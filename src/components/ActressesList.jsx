import ActressCard from "./ActressCard";


export default function ActressesList() {
    return (
        <section>
            <div className={`flex wrap`}>

                {setActresses.map(({id, name, image}) => {
                    
                    return <ActressCard
                        id={id}
                        name={name}
                        image={image}
                    />
                })}
            </div>
        </section>
    );
}