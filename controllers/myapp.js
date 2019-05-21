

exports.getdo = (req, res, next) =>{
    res.render('index');
}

exports.postdata = (req, res, next) =>{
    const title = req.body.data;

    console.log(title);
    res.redirect('/');
}