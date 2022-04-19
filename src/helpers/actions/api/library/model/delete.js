import store from '*/plugins/store'
import deleteRequest from '*/helpers/actions/api/request/delete'

export default function (
  {
    model,
    modelId
  }
) {
  const profileId =
    store.state.profile.info.id

  const url =
    `/profiles/${profileId}` +
    `/library/${model}s/${modelId}`

  const {
    token
  } = store.state.profile

  const params = {
    token
  }

  return deleteRequest.bind(
    this
  )(
    {
      url,
      params,
      isSaveError: true
    }
  )
}