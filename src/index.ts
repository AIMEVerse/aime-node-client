import { Wormholes,WormholeEvents,_xem} from "wormholes"
// Import the Xpell Wormholes and Event Manager modules (Xpell for Node.js)
import * as aime from "./aime-api/aime.js"

async function main() {


    console.log("starting")

  

    // Aime server url and port (use wss for secure connection)
    const wormholeUrl = "ws://127.0.0.1:3030/"

    

    

    _xem.on(WormholeEvents.WormholeOpen, async (e:any) => {
        console.log("Wormhole is open")
        // console.log(Wormholes.ws);
        
        const res = await Wormholes.sendSync(aime.env._get_environment_name)
        console.log(res)
    })

    Wormholes.open(wormholeUrl)



    


}

main().then( () => {
    console.log("done")
}).catch( (err) => {
    console.log(err)
})
