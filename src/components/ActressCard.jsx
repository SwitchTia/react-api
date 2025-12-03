export default function ActressCard({id, name, image, birth_year, nationality, biography }) {

    return (

        <div  >
            <h3 className="upperCase py-10">{name}</h3>
            <img className="card-img" src={image} alt={name} />
            <div className="flex-center gap mb-20">
                <span className="">{birth_year}</span>
                <span>{nationality}</span>
            </div>
            <div className="mb-20">
                <p>{biography}</p>
            </div>
        </div>

    );
}