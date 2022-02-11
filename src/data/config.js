export default {
    debug: true,
    state: {
        showAll: false
    },
    toggle() {
        this.state.showAll = !this.state.showAll;
        console.log(this.state.showAll);
    }
}