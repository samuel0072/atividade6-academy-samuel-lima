![Logo Raro Academy](./images/logo.jpeg)

# Atividade 6

O objetivo desta atividade é avaliar seus conhecimentos da ferramenta Cypress e como realizar testes e2e automatizados em uma aplicação Web.

## Enunciado

Leia a especificação abaixo e, em seguida, siga as orientações para a entrega da atividade.

- [Especificação C.R.U.D](./Especifica%C3%A7%C3%A3o%20CRUD%20api.md)

- [C.R.U.D Frontend](https://academy-crud-frontend.herokuapp.com/)

1. Crie um repositório público no Github chamado ``atividade6-academy-SEUNOME-SEUSOBRENOME``;

2. Inicie um novo projeto Cypress e configure de forma que aponte para o repositório criado anteriormente;

3. Instale e configure o plugin cypress-cucumber-preprocessor, que permite que documentos Gherkin sejam utilizados como teste;

4. Crie um arquivo ``.feature`` para documentar cenários da funcionalidade ``Listar usuários`` e, em seguida, implemente os testes seguindo o conceito de feature, step definitions e Page Objects;

5. Crie um arquivo ``.feature`` para documentar cenários da funcionalidade ``Criar usuário`` e, em seguida, implemente os testes seguindo o conceito de feature, step definitions e Page Objects;

6. Crie um arquivo ``.feature`` para documentar cenários da funcionalidade ``Atualizar um usuário`` e, em seguida, implemente os testes seguindo o conceito de feature, step definitions e Page Objects. ``DICA: atente-se ao fato de que o sistema precisa consultar um usuário antes de permitir a edição! Logo, ao utilizar a estratégia de mock/stub, é necessário lidar com isto primeiro.``;

7. Crie um arquivo ``.feature`` para documentar cenários da funcionalidade ``Remover um usuário`` e, em seguida, implemente os testes seguindo o conceito de feature, step definitions e Page Objects. ``DICA: atente-se ao fato de que o sistema precisa consultar um usuário antes de permitir a edição! Logo, ao utilizar a estratégia de mock/stub, é necessário lidar com isto primeiro.``.

8. Atualize o repositório do Github após implementar os testes.

## Entrega

📌 Importante 📌

Você deve responder à atividade no Google Classroom com o link do seu repositório no Github.

Atualizações neste repositório após a data final de entrega do trabalho serão consideradas como entregas fora do prazo.

## FAQ

Lembre-se de que a proposta do trabalho é realizar testes na camada de *frontend*, ou seja, na interface do Site. Logo, não é necessário validar extensivamente os retornos da API do C.R.U.D, mas sim, como o sistema Web responde após receber determinado retorno. Para isto, é recomendado utilizar o que aprendemos sobre ``fixtures`` e ``intercepts`` para mockar certas requisições e conseguir checar o comportamento do site.