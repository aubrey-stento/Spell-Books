import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'


let auth = axios.create({
  baseURL: 'http://mage-warz.herokuapp.com/auth',
  withCredentials: true
})

let spellbookapi = axios.create({
  baseURL: 'https://mage-warz.herokuapp.com/api',
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    spellbooks: [],
    spells: [],
    spellbook: {}
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },
    setBooks(state, spellbooks) {
      state.spellbooks = spellbooks
    },
    setActiveBook(state, spellbook) {
      state.spellbook = spellbook
    }
  },
  actions: {
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => {
          console.log(res.data)
          commit('SETUSER', res.data)
          router.push('/spellbooks')
        })
        .catch(err => alert(err))
    },
    register({ commit }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('SETUSER', res.data)
          router.push({ name: 'spellbooks' })
        })
        .catch(err => alert(err))
    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => commit('SETUSER', res.data))
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    logout({ commit }) {
      auth.delete('logout')
        .then(res => {
          commit('SETUSER', {})
          router.push({ name: 'auth' })
        })
    },
    getBooks({commit})  {
      spellbookapi.get('spellbooks')  
      .then(res=> {
        console.log('spellbooks', res.data)
        commit('setBooks', res.data)
      })
    },
    addBook({commit, dispatch}, newBook) {
      spellbookapi.post('spellbooks', newBook)
      .then(res =>  {
        dispatch('getBooks')
      })
    },
    getActiveBook({commit} , bookId) {
      spellbookapi.get('/spellbooks/' + bookId)
      .then(res => {
        commit('setActiveBook', res.data)
        router.push({ name: 'spellbook', params:{ bookId: res.data.spellbook._id}})
      })
    }
  }
})
