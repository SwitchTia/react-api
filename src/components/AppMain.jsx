import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


function AppMain() {
    const [actressesList, setActresses] = useState([]);
    const [actorsList, setActors] = useState([]);
    

    useEffect(() => {
        fetchAllActors();
    }, [])

    function fetchAllActors() {
        axios
            .get(`https://lanciweb.github.io/demo/api/actresses/`)
            .then((resp) => {
                setActresses(resp.data);
                return axios.get(`https://lanciweb.github.io/demo/api/actors/`)
            })
            .then((resp2) => {
                setActors(resp2.data);
            });
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="text-center mb-20">
                        <h1>Actors and Actresses</h1>
                        <p>List of actors and actresses fetched from an API</p>
                    </div>

                    <div className="container  flex wrap">
                        {actressesList.map((actress) => (
                            <div className="col card" key={actress.id}>
                                
                                <Card 
                                name={actress.name} 
                                image={actress.image}
                                birth_year={actress.birth_year} 
                                nationality={actress.nationality}
                                biography={actress.biography}
                                most_famous_movies={actress.most_famous_movies.join(", ")}
                                awards={actress.awards}
                                />
                            </div>
                        ))}

                        {actorsList.map((actor) => (
                            <div className="col card" key={actor.id}>
                                
                                <Card 
                                id={actor.id} 
                                name={actor.name} 
                                image={actor.image}
                                birth_year={actor.birth_year} 
                                nationality={actor.nationality}
                                biography={actor.biography}
                                most_famous_movies={actor.known_for.join(", ")}
                                awards={actor.awards.join(", ")}
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