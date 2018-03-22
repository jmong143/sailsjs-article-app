/**
 * ArtcilesController
 *
 * @description :: Server-side logic for managing artciles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res){
        Artciles.find({}).exec(function(err, articles){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {articles: articles});
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Artciles.create({title: title, body: body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/artciles/list');
        });
    },
    delete: function(req, res){
        Artciles.destroy({id: req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/artciles/list');
        });
        return false;
    },
    edit: function(req,res){
        Artciles.findOne({id: req.params.id}).exec(function(err, list){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('edit', {article: list});
        });
    },
    update: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Artciles.update({id: req.params.id}, {title: title, body: body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/artciles/list');
        });
    }
};

