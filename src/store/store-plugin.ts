import { defineStore } from 'pinia'
import { Names } from './store-name'

export const usePlugin1Store = defineStore(Names.usePlugin1Store, {
    state: () => ({
        name: '小明',
        count: 1,
    }),

    getters: {

    },
    actions: {

    }
})



export const usePlugin2Store = defineStore(Names.usePlugin2Store, {
    state: () => ({
        name: '小绿',
        count: 1
    }),

    getters: {

    },
    actions: {

    }
})