exports.get404 = (req, res) => {
    res.status(404).render('404', {
        title: 'Página não encontrada!',
        path: '/404'
    });
}

exports.get500 = (req, res, next) => {
    res.status(500).render('500', {
        title: 'Erro Interno!', 
        path: '/500'
    });
}