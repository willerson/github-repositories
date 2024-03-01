### Teste técnico - Front end - Pleno - Casar.com

# Lista de repositórios do GitHub

## Descrição
Nesse projeto você deverá desenvolver um site simples em que seja possível acessar a página de um usuário e visualizar seus repositórios públicos, além de poder favoritar/remover repositórios dos favoritos.


## Requisitos
- [x] Uma barra de pesquisa para procurar um usuário
- [x] Um feedback caso o usuário não seja encontrado
- [x] Uma página do usuário, mostrando suas informações e sua lista de repositórios
- [x] **NÃO OBRIGATÓRIO** A lista de repositórios deverá conter uma paginação com rolagem infinita, ou seja, mais repositórios serão carregados conforme o usuário rola a página para baixo até que não haja mais repositórios (estilo Facebook, Instagram, Twitter, etc.)
- [x] Possibilidade de favoritar e remover repositórios dos favoritos (utilizar algum gerenciador de estado)
- [x] Listar repositórios favoritos


## Obrigatório
- Utilização de um framework/lib dentre esses: (Vue 3, Nuxt 3, React ou Next)
- Typescript
- Responsividade
- Testes unitários (Jest ou Vitest), o máximo de cobertura que conseguir, mas no mínimo 1 unidade de teste, por exemplo: (Listagem de repositórios)
- Clean code

**Sinta-se livre para adicionar qualquer outra tecnologia, desde que utilize as tecnologias obrigatórias.**


## Diferenciais
- Tailwindcss
- Commits padronizados


## Layout
Desenvolver o site baseado nesse protótipo.

## Informações úteis

**Sobre a API do GitHub**

A API do GitHub requer uma autenticação. Você deverá gerar um token de acesso pessoal no seu GitHub e utilizá-lo no projeto. Caso não queira deixar o seu token visível em seu repositório, disponibilize um guia em seu **README** sobre onde substituir o token. Para mais detalhes sobre como gerar um token, acesse o [guia de autenticação do GitHub](https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28).


## Sobre a entrega
- Clone esse repositório (ou copie o README)
- Desenvolva seu projeto atualizando seu repositório
- Envie o link do seu repositório para tech@casar.com
    - Título do e-mail: Teste técnico - {Seu nome completo}
    - Corpo do e-mail: Link do repositório
    - Opcional: Cover letter


## Links
[Documentação da API do GitHub](https://docs.github.com/pt/rest?apiVersion=2022-11-28)


## Sobre o projeto
# Tecnologias
- [Nextjs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/pt/)
- [Tailwind css](https://tailwindcss.com/)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [momentjs](https://momentjs.com/)

## Utilização e testes


```
git clone https://github.com/willerson/github-repositories.git

```

Após clonar o projeto para testar será necessário gerar um token para sera adicionado no projeto, para ver como gerar, acesse este link: [Gerar token](https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Após gerar o token, pode pegar o arquivo __.env.example__ na raiz do projeto e criar um novo com nome __.env.local__ e adicionar o token gerado substituindo 'TOKEN_GERADO' 

```
NEXT_PUBLIC_GITHUB_TOKEN=TOKEN_GERADO
```

Agora só rodar

```
pnpm run dev

ou 

npm run dev
```