// refs
import { listRef } from './issuePage.jsx'

export const scrollToBottom = () => {
  listRef.current.scrollTo(0, listRef.current.scrollHeight)
}
