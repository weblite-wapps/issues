// modules
import { create } from 'axios'

const server = 'https://wapp.weblite.me/issues'

export const { get, post } = create({
  baseURL: server,
})
