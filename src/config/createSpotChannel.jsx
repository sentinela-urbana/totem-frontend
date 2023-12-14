import { createConsumer } from "@rails/actioncable"

const createSpotChannel = function (spot_id, token, setCameraIsSpotted) {
  let url = "wss://sentinela-urbana-49d7e73fc130.herokuapp.com/cable"
  const consumer = createConsumer(`${url}?token=${token}`)

  return consumer.subscriptions.create(
    { channel: "SpotChannel", spot_id: spot_id },
    {
      connected() {
        console.log('Connected')
      },

      disconnected() {
        console.log('Disconnected')
      },

      received(data) {
        console.log(`${token} received data: `, data)
        console.log("Spot called!")

        alert("AVISO: Alguém precisa de acompanhamento!")
        setCameraIsSpotted(true)
      },
    }
  )
}

export default createSpotChannel