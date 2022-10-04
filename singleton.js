

function Process (state) {
    this.state = state;
}

const Singleton = (function () {
    function ProcessManager () {
        this.count = 10;
    }
    let pManager;
    function createPManager () {
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getPManager: () => {
            if (!pManager) return createPManager();
            return pManager;
        }
    }
})();

const pManager1 = Singleton.getPManager();
const pManager2 = Singleton.getPManager();

console.log(pManager1 === pManager2, pManager1.count, pManager2.count);
