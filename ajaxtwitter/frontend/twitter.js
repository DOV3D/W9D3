const FollowToggle = require('./follow_toggle');

$(()=> {
    $('button.follow-toggle').each(function(idx, el) {
        return new FollowToggle(el);
    })
})
