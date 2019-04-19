import { ajax } from "rxjs/ajax"

interface BaseHeaders {
  "Content-Type": string
}

const getBaseHeaders = (): BaseHeaders => ({
  "Content-Type": "application/json",
})

const get = (url: string, headers?: any) =>
  ajax.get(url, { ...getBaseHeaders(), ...headers })
const post = (url: string, body: any, headers?: any) =>
  ajax.post(url, body, { ...getBaseHeaders(), ...headers })

const put = (url: string, body: any, headers?: any) =>
  ajax.put(url, body, { ...getBaseHeaders(), ...headers })

const patch = (url: string, body: any, headers?: any) =>
  ajax.patch(url, body, { ...getBaseHeaders(), ...headers })
const remove = (url: string, headers?: any) =>
  ajax.delete(url, { ...getBaseHeaders(), ...headers })

export default {
  get,
  post,
  put,
  patch,
  delete: remove,
}
