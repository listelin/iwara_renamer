'use strict';

const request = require('request')
const { JSDOM } = require('jsdom')

var iwaraUtil = {
    list_contents: function (iwara_url,cb) {

        let contents_list = [];
        request(iwara_url, (e, response, body) => {
            if (e) { console.error(e) }

            try {
                const dom = new JSDOM(body)
                let n = dom.window.document.querySelectorAll('h3.title')
                for (let i = 0; i < n.length; ++i) {
                    let c = {
                        title: n[i].getElementsByTagName('a')[0].textContent,
                        user: n[i].nextElementSibling.text,
                        content_id: n[i].getElementsByTagName('a')[0].href.replace(/^.*\/videos\//, '').replace(/\?.+$/,'')
                    }
                    contents_list.push(c)
                }
        
            } catch (e) { console.error(e) }
            cb(contents_list)

        })
 
    },

    get_user_title: function (id,cb) {

        let username,title;
        let iwara_url = "https://ecchi.iwara.tv/videos/" + id
        request(iwara_url, (e, response, body) => {
            if (e) { console.error(e) }

            try {
                const dom = new JSDOM(body);
                username = dom.window.document.querySelector('a.username').text;
                title = dom.window.document.querySelector('head title').text.replace(' | Iwara','');         
            } catch (e) { console.error(e) }
            cb(username,title);

        })
        
    }
}

module.exports = iwaraUtil;