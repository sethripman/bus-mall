import treeData from './trees.js';

const TREES_KEYS = 'TREES';

const store = {
    storage: window.localStorage,

    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },

    getTrees() {
        let trees = store.get(TREES_KEYS);

        if (!trees) {
            store.save(TREES_KEYS, treesData);
            trees = treesData;
        }

        return trees;
    }

};