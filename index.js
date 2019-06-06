const rbx = require('noblox.js');

exports.setRank = function(cookie, groupid, userid, rankid) {
    if(!cookie) return console.log('You did not supply a cookie.')
    if(!groupid) return console.log("You did not use all of the parameters! \nGroupId, UserId, RankId")
    if(!userid) return console.log("You did not use all of the parameters! \nGroupId, UserId, RankId")
    if(!rankid) return console.log("You did not use all of the parameters! \nGroupId, UserId, RankId")
    rbx.cookieLogin(cookie);
    rbx.setRank({group: groupid, target: userid, roleset: rankid})
    console.log(`Changed the rank of ${userid} in group ${groupid} to ${rankid}`);
}

exports.promote = function(cookie, groupid, userid) {
    if(!cookie) return console.log('You did not supply a cookie.')
    if(!groupid) return console.log("You did not use all of the parameters! \nGroupId, UserId")
    if(!userid) return console.log("You did not use all of the parameters! \nGroupId, UserId")
    rbx.cookieLogin(cookie);
    rbx.promote({group: groupid, target: userid})
    console.log(`Promoted ${userid} in group ${groupid}`)
}

exports.demote = function(cookie, groupid, userid) {
    if(!cookie) return console.log('You did not supply a cookie.')
    if(!groupid) return console.log("You did not use all of the parameters! \nGroupId, UserId")
    if(!userid) return console.log("You did not use all of the parameters! \nGroupId, UserId")
    rbx.cookieLogin(cookie);
    rbx.demote({group: groupid, target: userid})
    console.log(`Demoted ${userid} in group ${groupid}`)
}
exports.shout = function(cookie, groupid, message) {
    if(!cookie) return console.log('You did not supply a cookie.')
    if(!groupid) return console.log("You did not use all of the parameters! \nGroupId, Message")
    if(!message) return console.log("You did not use all of the parameters! \nGroupId, Message")
    rbx.cookieLogin(cookie);
    rbx.shout({group: groupid, message: message})
    console.log("Shouted " + message + " to group " + groupid)
}