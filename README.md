## Instalação

Para instalar e executar este projeto, siga estas etapas:

1. Clone o repositório:

```bash
git clone https://github.com/felipel7/react-games.git
```

Entre no diretório do projeto:

```bash
cd react-games
```

Construa a imagem Docker:

```bash
docker build -t games .
```

Execute o container Docker:

```bash
./run.sh
```

_Isso iniciará o servidor de desenvolvimento e você poderá acessar o aplicativo em http://localhost:5173_.

<br />

### Desenvolvimento

Se você quiser desenvolver o código localmente e usar ferramentas como o TypeScript no Visual Studio Code, precisará instalar as dependências do projeto localmente. Isso pode ser feito executando o seguinte comando no diretório do projeto:

```bash
yarn install
```

_Isso instalará todas as dependências do projeto e criará a pasta node_modules localmente_.
