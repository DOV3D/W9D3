const { Module } = require("webpack")

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');


    }

}
    


Module.exports =  FollowToggle;