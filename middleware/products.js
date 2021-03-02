function validateData(req, res, next) {
  if(req.body.title === '') {
    res.status(404).send('Titulo não pode ser uma propriedade vazia');
  }

  if(req.body.description === '') {
    res.status(404).send('Descrição não pode ser uma propriedade vazia');
  }
  next();
}

module.exports = {
  validateData: validateData,
};
