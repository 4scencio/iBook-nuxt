import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Login {
    email: string,
    password: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
    private token = '' as Token

    //Mutation -> Alterar Estado
    @Mutation   
    private SET_TOKEN(token: Token) {
        this.token = token
    }

    //Actions -> Requisições 
    @Action
    public async create({email, password}: Login) {
        const { accessToken }  = await $axios.$post('/login', {email, password})

        await $cookies.set('token', accessToken, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30 // 30 days
        })

        this.context.commit('SET_TOKEN', accessToken)
    }

    @Action
    public update() {
      const token = $cookies.get('token') || null
      this.context.commit('SET_TOKEN', token)
    }
  
    @Action
    public destroy() {
      $cookies.remove('token')
      this.context.commit('SET_TOKEN', null)
    }
}

