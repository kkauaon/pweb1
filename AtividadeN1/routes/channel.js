var express = require('express');
var router = express.Router();

const listChannels = require('../public/json/channels.json');

router.get('/:channelName', function (req, res) {
    res.render('channel', {
        user: req.query.u ? {
            name: req.query.u
        } : null,
        channel: listChannels.find(f => f.id == req.params.channelName) ?? null
    });
});

router.get('/', (req,res)=> {
    if (req.query.c) {
        const ch = listChannels.find(c => "#"+c.channelName == req.query.c)

        if (!req.query.u) return res.redirect('/channel/'+ch.id)
        else return res.redirect('/channel/'+ch.id+'?u='+encodeURIComponent(req.query.u))
    } else {
        if (!req.query.u) return res.redirect('/')
        else return res.redirect('/?u='+encodeURIComponent(req.query.u))
    }
})

module.exports = router;
