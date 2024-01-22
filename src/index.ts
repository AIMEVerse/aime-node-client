import { Wormholes,WormholeEvents,_xem} from "wormholes"
// Import the Xpell Wormholes and Event Manager modules (Xpell for Node.js)


async function main() {


    console.log("starting")

  

    // Aime server url and port (use wss for secure connection)
    const wormholeUrl = "ws://127.0.0.1:3030/"

    const getEnvironmentNameMessage = {
        _module: "xenvironment",
        _op: "get-name"
    }

    

    _xem.on(WormholeEvents.WormholeOpen, async (e:any) => {
        console.log("Wormhole is open")
        // console.log(Wormholes.ws);
        
        const res = await Wormholes.sendSync(getEnvironmentNameMessage)
        console.log(res)
    })

    Wormholes.open(wormholeUrl)



    


}

main().then( () => {
    console.log("done")
}).catch( (err) => {
    console.log(err)
})
