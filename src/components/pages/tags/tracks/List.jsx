import React from 'react'
import { List } from 'semantic-ui-react'
import { v4 as uuid } from 'uuid'
import TrackContext from 'global/player/TrackContext'

export default class TracksList extends React.PureComponent {
  render () {
    const { tracks } = this.props

    const trackData = track => {
      const key = uuid()
      const artistName = track.artist
      const artist = true
      const trackProps = { track, artistName, artist, key }

      return <TrackContext {...trackProps} />
    }
    const tracksListData = tracks.map(trackData)
    const tracksData = tracks.length > 0 && (
      <List selection content={tracksListData} />
    )

    return <React.Fragment>{tracksData}</React.Fragment>
  }
}
