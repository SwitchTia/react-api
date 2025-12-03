import { useEffect, useState } from "react";
import ActressesList from "./ActressesList";
import ActressList from "./ActressesList";
import axios from "axios";

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
                    <div className="text-center">
                        <h1>Actors</h1>
                        <p>List of actors fetched from an API</p>
                    </div>

                    <div className="container">
                        {actresses.map((actress) => (
                            <div className={`col card`} >

                                <img className="card-img" src={actress.image} alt={name} />
                                <h5 className="upperCase">{actress.name}</h5>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    )
}

export default AppMain;