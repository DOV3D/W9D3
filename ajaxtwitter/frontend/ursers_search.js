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
            this.$input.val() = this.$input.text()
            APIUtil.searchUsers(this.$input.val()).then((res) => {
                console.log(res)
            })
        })
    }
}

module.exports = UsersSearch;