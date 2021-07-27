export default {
    state: {
        shopList: [
            {
                id: 1, 
                title: 'Nike Red',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                img: require('../assets/img/1.png'),
                gallery: [
                    { name: 'Nike boots 1', img: require('../assets/img/1.png')},
                    { name: 'Nike boots 2', img: require('../assets/img/2.png') },
                    { name: 'Nike boots 3', img: require('../assets/img/3.png') }
                ]
            },
            {
                id: 2,
                title: 'Nike Brown',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                img: require('../assets/img/4.png'),
                gallery: [
                    { name: 'Nike boots 1', img: require('../assets/img/4.png') },
                    { name: 'Nike boots 2', img: require('../assets/img/5.png') },
                    { name: 'Nike boots 3', img: require('../assets/img/6.png') }
                ]
            },
            {
                id: 3,
                title: 'Nike Green',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                img: require('../assets/img/7.png'),
                gallery: [
                    { name: 'Nike boots 1', img: require('../assets/img/7.png') },
                    { name: 'Nike boots 2', img: require('../assets/img/8.png') },
                    { name: 'Nike boots 3', img: require('../assets/img/9.png') }
                ]
            },
            {
                id: 4,
                title: 'Nike Street',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                img: require('../assets/img/10.png'),
                gallery: [
                    { name: 'Nike boots 1', img: require('../assets/img/11.png') },
                    { name: 'Nike boots 2', img: require('../assets/img/12.png') }
                ]
            }
        ]      
    },
    //Setters - mutations and actions
    mutations: {
    },
    actions: {        
    },
    //Getters - get data from state
    getters: {
        getShopList(state) {
           return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}