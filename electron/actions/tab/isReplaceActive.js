import getTabs from '#/actions/tabs/get'
import getActiveTabId from './getActiveId'

export default function (
  tabId
) {
  const isMultipleTabs =
    getTabs().length > 1

  const isActive = (
    tabId === getActiveTabId()
  )

  return (
    isMultipleTabs &&
      isActive
  )
}
