import { useEffect, useState } from "react";
import ActressesList from "./ActressesList";
import axios from "axios";
import ActressCard from "./ActressCard";

function AppMain() {
    const [actresses, setActresses] = useState([]);

    useEffect(() => {
        fetchActresses();
    }, [])

    function fetchActresses() {

        axios
            .get(`https://lanciweb.github.io/demo/api/actresses/`)
            .then((resp) => {
                setActresses(resp.data);
            });
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="text-center mb-20">
                        <h1>Actors</h1>
                        <p>List of actors fetched from an API</p>
                    </div>

                    <div className="container  flex wrap">
                        {actresses.map((actress) => (
                            <div className="col card" key={actress.id}>
                                <ActressCard 
                                id={actress.id} 
                                name={actress.name} 
                                image={actress.image}
                                birth_year={actress.birth_year} 
                                nationality={actress.nationality}
                                biography={actress.biography}
                                most_famous_movies={actress.most_famous_movies}
                                awards={actress.awards}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    )
}

export default AppMain;