export default {
    debug: true,
    state: {
        showAll: false,
        imageCount: 0,
        totalCount: 0
    },
    toggle() {
        this.state.showAll = !this.state.showAll;
        console.log(this.state.showAll);
    },
    addImage() {
        this.state.imageCount += 1;
        this.state.totalCount += 1;
    },
    addEmpty() {
        this.state.totalCount += 1;
    }
}