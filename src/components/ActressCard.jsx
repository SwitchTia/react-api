export default function ActressCard({id, name, image }) {

    return (

        <div className={`col`} >

            <img src={image} alt={name} />
            <h5 className="upperCase">{name}</h5>
        </div>

    );
}