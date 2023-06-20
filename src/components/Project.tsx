import { Octokit } from 'octokit';
import {useState, useEffect, useMemo} from "react";

export default function Project({ name }) {

    const images = {
        "GBIF-API-BDD": 'https://boninabox.geobon.org/frontend/images/tool-images/ipt3.jpg',
        "DNS-server-C": 'https://static.vecteezy.com/system/resources/previews/007/202/203/large_2x/dns-letter-logo-design-on-white-background-dns-creative-initials-letter-logo-concept-dns-letter-design-vector.jpg',
        "platziverse": 'https://www.actus.today/wp-content/uploads/2020/07/IoT_1@2x.png',
        "discordBot": 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png',
    }

    const [ data, setData ] = useState(null);
    const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_KEY });

    const makeCall = () => {
        console.log("Making Github call...")
        return octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'TalkySafe143',
            repo: name,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }

    const memo = useMemo(() => makeCall(), []);

    memo.then(res => setData(res));

    return (
        <div className="project-tile">
            <img src={images[name] ? images[name] : 'https://www.sibs.org.uk/wp-content/uploads/2022/02/Question-mark-png.png'}
                 alt="" />
            <div className="overlay" onClick={() => (data.data.svn_url) ? window.open(data.data.svn_url, '_blank', 'noreferrer') : "#"}>
                <div className="project-description">
                    <h3>{name}</h3>
                    <p>
                        {data ? data.data.description : "Loading..."}
                    </p>
                </div>
            </div>
        </div>
    );
}