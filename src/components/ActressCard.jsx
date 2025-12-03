export default function ActressCard({id, name, image }) {

    return (

        <div  >
            <h5 className="upperCase">{name}</h5>
            <img className="card-img" src={image} alt={name} />
            
        </div>

    );
}