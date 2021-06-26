import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
  },
  actions: {
    addContact(context, data) {
      try {
        const contactsList = context.state.contacts;
        const addContact = {
          id: context.state.contacts.length + 1,
          name: data.name,
          phone: data.phone,
        };
        contactsList.push(addContact);
        context.commit('setContacts', contactsList);
      } catch (error) {
        console.log(error);
      }
    },
    updateContact(context, data) {
      try {
        const contactsList = context.state.contacts;
        const contactIndex = contactsList.findIndex(((obj) => obj.id === data.id));
        contactsList[contactIndex].name = data.name;
        contactsList[contactIndex].phone = data.phone;
        context.commit('setContacts', contactsList);
      } catch (error) {
        console.log(error);
      }
    },
    removeContact(context, index) {
      try {
        const contactsList = context.state.contacts;
        contactsList.splice(index, 1);
        context.commit('setContacts', contactsList);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
