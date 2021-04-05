import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    cart : [],
    fooddata: [{
        name : "Çorbalar",
        id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
        menu: [{
            item: "Mercimek",
            img: "corba-mercimek.jpg",
            price: 10.15,
            id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
            addOns: ["none", "tırnak pide", "roka", "limon "],
            description: "Mercimek çorbası"
          },
          {
            item: "Domates",
            img: "corba-domates.jpg",
            price: 7.35,
            id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
            addOns: ["none", "tırnak pide", "roka", "limon "],
            description: "Domates Çorbası"
          },
          {
            item: "Covid-19 Savar",
            img: "corba-covid.jpg",
            price: 20.31,
            id: "ecd7c207-acd7-4b58-8685-894ba622949e",
            addOns: ["none", "tırnak pide", "roka", "limon "],
            description: "Covid-19'un aşısı burada !"
          }
        ]
      },
      {
        name : "Pizza",
        id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
        menu: [{
            item: "Jimmy Willy",
            img: "pizza-jimmywilly.jpg",
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            price: 17.99,
            id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
            description: "Design your own pizza"
          },
          {
            item: "Pizza Budur",
            img: "pizza-budur.jpg",
            price: 17.99,
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
            description: "A Carnivore’s delight. Pepperoni, Sausage, Salami & Canadian Bacon."
          },
          {
            item: "Ne vereyim abime ?",
            img: "pizza-neveriyimabime.jpg",
            price: 17.99,
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            id: "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
            description: "Tomatoes, Olives, Garlic, Onions, Mushrooms & Bells."
          }
        ]
      },
      {
        name: "Hamburger",
        id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
        menu: [{
            item: "Ayyyyy !",
            img: "hamburger-ayyyyy.jpg",
            price: 6.49,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
            description: "Whole shrimp in a translucent wrapper."
          },
          {
            item: "AnılG Speacial Menu",
            img: "hamburger-anılgmenu.jpg",
            price: 9.99,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
            description: "Dumplings filled with pork, crab meat and broth."
          },
          {
            item: "Chicken Speacial",
            img: "hamburger-chickenspecial.jpg",
            price: 5.59,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
            description: "Chinese eggplant filled with ground shrimp in sauce"
          },
        ]
      },
      {
        name: "Tatlılar",
        id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
        menu: [{
            item: "Baklava",
            img: "tatlı-baklava.jpg",
            price: 6.49,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
            description: "Whole shrimp in a translucent wrapper."
          },
          {
            item: "Kunefe",
            img: "tatlı-kunefe.jpg",
            price: 9.99,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
            description: "Dumplings filled with pork, crab meat and broth."
          },
          {
            item: "Dostlar Special",
            img: "tatlı-dostlarspecial.jpg",
            price: 5.59,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
            description: "Chinese eggplant filled with ground shrimp in sauce"
          },
        ]
      },
      {
        name: "Dostlar",
        id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
        menu: [{
            item: "Anıl Special",
            img: "dostlar-anılınki.jpg",
            price: 6.49,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
            description: "Whole shrimp in a translucent wrapper."
          },
          {
            item: "Onur Special",
            img: "dostlar-onurunki.jpg",
            price: 9.99,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
            description: "Dumplings filled with pork, crab meat and broth."
          },
          {
            item: "Seço Special",
            img: "dostlar-sulcukunki.jpg",
            price: 5.59,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
            description: "Chinese eggplant filled with ground shrimp in sauce"
          },
        ]
      }
    ]
  })

  // export const getters = {
  //   getterValue: state => {
  //     return state.value
  //   }
  // }

export const mutations = {
  updateCart: (state, orderOutput) => {
    orderOutput.id = uuidv4()
    state.cart.push(orderOutput)
  }
}

  // export const actions = {
  //   updateActionValue({ commit }) {
  //     commit('updateValue', payload)
  //   }
  // }