const FollowToggle = require('./follow_toggle');
const APIUtil = require('./api_util');
$(()=> {
    $('button.follow-toggle').each(function(idx, el) {
        return new FollowToggle(el);
    })
})
