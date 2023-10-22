import {
  mapState
} from 'pinia'
import recommendationTracksStore from '@/stores/recommendationTracks'

export default {
  computed: {
    ...mapState(
      recommendationTracksStore,
      {
        isRecommendationTracksHideLibraryTracks:
          'isHideLibraryTracks',
        isRecommendationTracksHideLibraryArtists:
          'isHideLibraryArtists',
        recommendationTracksHideLibraryArtistsTracksCount:
          'hideLibraryArtistsTracksCount',
        isRecommendationTracksHideListenedTracks:
          'isHideListenedTracks',
        isRecommendationTracksHideListenedArtists:
          'isHideListenedArtists'
      }
    )
  },
  watch: {
    isRecommendationTracksHideLibraryTracks:
      'handleIsRecommendationTracksHideLibraryTracks',
    isRecommendationTracksHideLibraryArtists:
      'handleIsRecommendationTracksHideLibraryArtists',
    recommendationTracksHideLibraryArtistsTracksCount:
      'handleRecommendationTracksHideLibraryArtistsTracksCount',
    isRecommendationTracksHideListenedTracks:
      'handleIsRecommendationTracksHideListenedTracks',
    isRecommendationTracksHideListenedArtists:
      'handleIsRecommendationTracksHideListenedArtists'
  },
  methods: {
    handleIsRecommendationTracksHideLibraryTracks () {
      this.refreshContent()
    },
    handleIsRecommendationTracksHideLibraryArtists () {
      this.refreshContent()
    },
    handleRecommendationTracksHideLibraryArtistsTracksCount () {
      this.refreshContent()
    },
    handleIsRecommendationTracksHideListenedTracks () {
      this.refreshContent()
    },
    handleIsRecommendationTracksHideListenedArtists () {
      this.refreshContent()
    },
    refreshContent () {
      if (this.isRecommendationsPage) {
        this.$refs
          .page
          .refresh()
      } else if (this.isRecommendationsSegment) {
        this.$refs
          .segment
          .refresh()
      } else if (this.isRecommendationsTab) {
        this.$refs
          .tab
          .refresh()
      }
    }
  }
}
