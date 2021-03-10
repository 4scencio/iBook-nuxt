import { Middleware } from '@nuxt/types'

const user: Middleware = ({ store, redirect }) => {
  if (store.state.auth.token) {
    return redirect('/dashboard')
  }
}

export default user