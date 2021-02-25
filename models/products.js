const products = [
  {
    title: "Fritadeira Elétrica sem Óleo/Air Fryer",
    description:
      "Inove nas receitas e torne seus momentos na cozinha muito mais saudáveis com a Fritadeira Elétrica sem Óleo/Air Fryer Gourmet Black PFR15P da Philco. Disponível na cor preto ela frita com pouquíssimo ou nenhum óleo, o que te permite criar receitas deliciosas e ainda cuidar da saúde. O cesto removível possui 4 litros de capacidade total e 3,2 litros de capacidade útil do cesto, revestimento antiaderente que facilita o cozimento e evita que os alimentos grudem. A fritadeira ainda conta com controle de temperatura de 80 a 200°C assim você pode escolher qual a temperatura ideal para cada tipo de alimento. E tem mais, sua tecnologia Air Fry 360 vai garantir que o ar quente passe por todo o alimento, deixando o preparo uniforme e delicioso.",
  },
  {
    title: "Creme de Leite Integral 200g",
    description:
      "Explore seu lado cozinheiro e crie receitas deliciosas com o Creme de Leite Piracanjuba de 200g. Produzido com ingredientes selecionados por uma das marcas mais reconhecidas pelos brasileiros, ele traz um sabor incomparável e textura aveludada, além de apenas 17% de gordura. Perfeito para utilizar em preparos doces ou salgados e saborear a qualquer momento do dia.",
  },
  {
    title: "Molho de Tomate Tradicional",
    description:
      "Explore o cozinheiro que existe em você e crie receitas inovadoras e deliciosas com o Molho de Tomate Heinz Tradicional. Produzido com ingredientes de alta qualidade e totalmente frescos, ele possui um sabor especial e único. Também contém pedaços de tomate misturados ao molho, que dão um toque caseiro para seus pratos. Tudo isso sem a adição de conservantes.",
  },
];

function getProducts() {
  return products;
}

function insertProduct(product) {
  products.push(product);
}

module.exports = {
  getProducts: getProducts,
  insertProduct: insertProduct,
};
