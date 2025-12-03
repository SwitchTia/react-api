import ActressesList from "./ActressesList";
import ActressList from "./ActressesList";

function AppMain() {
    const [actresses, setActresses] = useState([]);

    function fetchActresses() {

        axios
            .get(`https://lanciweb.github.io/demo/api/actresses/`)
            .then((resp) => {
                setActresses(resp.data.results);
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
                        {setActresses.length !== 0 ? <ActressesList /> : <Alert>
                            <h2>ERROR</h2>
                        </Alert>}
                    </div>

                </div>
            </main>
        </>
    )
}

export default AppMain;