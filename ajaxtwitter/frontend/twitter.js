const FollowToggle = require('./follow_toggle');
const APIUtil = require('./api_util');
const UsersSearch = require('./ursers_search')

$(()=> {
    $('button.follow-toggle').each(function(idx, el) {
        return new FollowToggle(el);
    })

    $("nav.users-search").each(function(idx, el){
        return new UsersSearch(el)
    })
})
