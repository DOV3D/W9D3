const APIUtil = require ('./api_util')

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        // console.log('this is being called');
        this.render();
        this.handleClick();
    }

    render() {
        if(this.followState === 'unfollow') {
            this.$el.text('Follow!');
            this.$el.prop('disabled', true);
        }
        else if (this.followState === 'follow') {
            this.$el.text('Unfollow!');
            this.$el.prop('disabled', true);

        }
        this.$el.prop('disabled', false);

        // this.$el.disabled = this.followState.prop('unfollow');
    }

    handleClick() {
        // console.log('hitting handleclick');
        const handler = function (e) {
            e.preventDefault();
            if(this.followState === 'unfollow') {
                APIUtil.followUser(this.userId);
                this.followState='follow';
            } else {
                APIUtil.unfollowUser(this.userId);
                this.followState='unfollow';
            }
            this.render();
        };
        this.$el.on('click', handler.bind(this));
    }

}
    
module.exports =  FollowToggle;