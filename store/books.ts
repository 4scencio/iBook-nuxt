import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  // books = ['livro 1', 'livro 2', 'livro 3']

  private count = 0 

  //GETTERS
  public get $count() {
    return this.count
  }

  //MUTATIONS
  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  //ACTIONS
  @Action
  public increment() {
    this.context.commit('INCREMENT', -1)
  }
}