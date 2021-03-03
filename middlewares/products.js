function log(req, res, next) {
  console.log("passando pelo middleware de log");
  next();
}

function validateBody(req, res, next) {
  const newProduct = req.body;

  if (newProduct.title.trim() === "") {
    res.status(400).send("Erro: o campo de titulo é obrigatório");
    return;
  } else if (newProduct.description.trim() === "") {
    res.status(400).send("Erro: o campo de descricao é obrigatório");
    return;
  }

  next();
}

module.exports = {
  log: log,
  validateBody: validateBody
};
