import React from "react"
import { observer } from "mobx-react"

@observer
class Stats extends React.Component {
  render() {
    let store = this.props.statsStore

    if(store.isLoading) return <div>
      Loading... this may take a while depending how distributed is the hash in
      the network and the speed of the nodes having it.
    </div>

    if(!store.isValid || !store.wasLoadingStats) return <div></div>

    const DefaultCumSize = {value: "Loading...", unit: ""}

    let CumulativeSize = store.stats.CumulativeSize || DefaultCumSize

    return (
      <div className="stats">
        <p>Peers with this Hash: <b>{store.peersAmount || "Loading..."}</b></p>
        <p>Object cumulative size: <b>{CumulativeSize.value} {CumulativeSize.unit}</b></p>
      </div>
    )
  }
}

export default Stats
