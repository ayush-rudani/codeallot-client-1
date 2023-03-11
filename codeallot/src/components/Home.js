import CCard from "./CCard";
import { useEffect, useState } from "react";
import axios from 'axios';

import { InfinitySpin } from 'react-loader-spinner';

function Home(props) {

    const [codex, setCodex] = useState();
    const [loading, setLoading] = useState(true);

    async function getCodex() {
        const response = await axios.get('api/Codex', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data)
        setCodex(response.data);
        setLoading(false);

        // axios.get("/api/Codex/", {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then((response) => {
        //     console.log(response.data);
        // });
    }

    useEffect(() => {
        getCodex();
    }, []);

    return (
        <>



            {loading ? (<div className="flex justify-center items-center h-screen"><InfinitySpin width='200' color="#4fa94d" /></div>) :
                (<div class="space-y-4 w-7/12 mt-10 mx-auto mb-8">
                    {codex.map((item) => (<CCard key={item.id} codex={item} />))}
                </div>)
            }

            {/* <div class="space-y-4 w-7/12 mt-10 mx-auto mb-8">
                {!loading ? (
                    codex.length > 0 ? (
                        codex.map((item) => (
                            <CCard key={item.id} id={item.id} title={item.title} description={item.description} />
                        ))

                    ) : ('No Codex Found')
                ) : (<InfinitySpin />)
                }

            </div> */}


            {/* <div class="space-y-4 w-7/12 mt-10 mx-auto mb-8">
                <CCard />
                <CCard />
                <CCard />
            </div> */}
        </>
    );
}

export default Home;

