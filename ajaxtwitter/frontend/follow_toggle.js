const APIUtil = require ('./api_util')

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        // console.log('this is being called');
        this.render();
    }

    render() {
        if(this.followState === 'unfollow') {
            this.$el.text('Follow!');
        }
        else if (this.followState === 'follow') {
            this.$el.text('Unfollow!');
        }
    }

    handleClick() {
        
    }

}
    


module.exports =  FollowToggle;