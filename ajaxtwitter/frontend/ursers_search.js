const APIUtil = require ("./api_util")

class UsersSearch {
    constructor(el){
        this.$el = $(el);
        this.$input = this.$el.find("input");
        this.$ul = this.$el.find("ul.users")
        this.handleInput()
    }

    handleInput() {
        this.$input.on('keypress', function () {
            APIUtil.searchUsers(this.$input.value);
            this.$ul.text()
            // APIUtil.searchUsers(this.$input.text()).then((res) => {
            //     console.log(res)
            // })
        })
    }
}

module.exports = UsersSearch;