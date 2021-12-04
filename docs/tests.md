# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.

> **Links Úteis**:
>
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
>
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)

# Testes de Software

| Página   | Requisito         | Funcionalidade                       | Cenário de Teste                                                                                                                                                                |
| -------- | ----------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cardápio | -                 | Exibir produtos disponíveis          | Ao carregar a página, é esperado que todos os produtos de cada categoria (lanches, lanches fit, bebidas e sobremesas) sejam mostrados para o usuário.                           |
| Cardápio | Pesquisar lanches | Pesquisar lanches                    | Ao digitar algo no campo "Pesquisar por um produto" e clicar no botão da lupa, os produtos que contém a palavra digitada serão mostrados.                                       |
| Cardápio | -                 | Adicionar produtos ao carrinho       | Ao clicar no botão de adicionar, presente em cada produto do cardápio, tal produto é enviado para o carrinho.                                                                   |
| Cardápio | -                 | Rolar a página para melhor navegação | Ao clicar no banner de uma categoria, é esperado que a página role até tal categoria.                                                                                           |
| Cardápio | -                 | Limpar o carrinho                    | Ao clicar em "Limpar o carrinho", é esperado que os produtos selecionados pelo usuário sejam desconsiderados.                                                                   |
| Cardápio | Registrar cliente | Fazer cadastro de novo usuário       | Ao preencher os campos da página e clicar no botão "Cadastrar", é esperado que os dados do usuário sejam armazenados no localStorage e, dessa forma, ele consiga fazer o login. |
| Pedidos | -                 | Exibir os pedidos feitos pelo cliente  | Espera-se que sejam carregados informações do pedido do cliente.|
| Minha fidelidade | -        | Mostrar itens do Programa de fidelidade| É esperado que os dados dos programas de fidelidade que o cliente participa sejam exibidos. |
| Cartões salvos | -          | Exibe os cartões cadastrados           | Espera-se que os dados dos cartões cadastrados sejam mostrados.|
| Cartões salvos | -          | Excluir dados de cartão salvo          | Espera-se excluir cartões salvos. |
| Adicionar cartão | -        | Adiciona novo cartão                   | Espera-se que seja possível acrescentar novo(s) cartão(ões). |
| Meus dados | -              | Exibir  cadastro do cliente            | Espera-se visualizar os dados do cliente que estam no localStorage. |
| Alterar dados | -           | Editar cadastro do cliente             | Espera-se alterar os dados do cadastro do cliente. |
| Alterar dados  | -          | Excluir o cadastro do cliente          | Espera-se excluir os dados do cliente que estam salvos no localStorage. |
| Carrinho  | -               | Mostrar alerta                         | Ao acessar o carrinho sem nenhum produto selecionado o cliente é informado da situação por meio de um alerta.
| Carrinho | -                | Visualizar produtos selecionados       | Ao selecionar os produtos selecionados no cardápio, os mesmos são direcionados para o carrinho sendo apresentado seus valores e totalizados com a taxa de entrega.
| Carrinho | -                 | Retornar para o cardápio              | Ao clicar no mesmo, o cliente é redirecionado para a página do cardápio.
| Carrinho | -                | Direcionar para aba de Finalização do pagamento e pedido | Ao clicar no mesmo, o cliente é direcionado para a página de pagamento.
| Pagamento | -               | Permitir que o usuário selecione sua forma de pagamento | Permite seleção ou preenchimento de dados para que selecione sua forma de pagamento
| Pagamento | -               | Alterar pedido                         | Ao clicar no botão "alterar pedido" o usuário retorna para o carrinho com a possibilidade de alterar seu pedido.
