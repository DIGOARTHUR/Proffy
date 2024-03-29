<!-- VISUALIZAR NO VSCODE  CTRL + K  V -->

<!-- BADGES https://www.youtube.com/watch?v=cRoBt6AZgjc
https://dev.to/envoy_/150-badges-for-github-pnk

BUILD BADGES
https://shields.io
ICONS
https://simpleicons.org/?q=react

EXEMPLO

 <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-JavaScript-/?logo=JavaScript&logoColor=white&color=yellow)<a/>

# JavaScript - Nome que aparece na Bag
# logo=JavaScript - Muda a logo vide <https://simpleicons.org/?q=react>
# color=yellow - Define a cor da bag <https://shields.io>
# logoColor=white - Define a cor do icone
-->



  
  

 <!------------------------------------STACKS-->
#### Stacks:
<p align="left">


  
   <a href="https://github.com/braziljs/eloquente-javascript"><img  alt="Javascript"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/210762520-8226f647-a814-4723-8e6d-ed0334550838.svg"><a/>
   <a href="https://www.typescriptlang.org/"><img  alt="TypeScript"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg"><a/>
      <a href="https://nodejs.org/en/"><img  alt="NodeJS"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/210762525-21dfac80-b121-4517-b3dd-3f62fe413d5a.svg"><a/>
      <a href="https://expo.dev"><img  alt="Expo"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/210762516-b48ee0ef-9d7b-4d86-951b-b80515c39783.svg"><a/>
      <a href="https://www.npmjs.com/package/sqlite3"><img  alt="SQLite"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/215260548-83c41e10-09c6-4ddf-8e12-f56746d6b0f6.svg"><a/>
      
</p>
  


 <!------------------------------------TOOLS-->
 #### Tools:
 <a href="https://code.visualstudio.com/"><img  alt="Vscode"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/149663512-3f83da57-bdfe-4cef-bcc2-feb304a738ff.png"><a/>
 <a href="https://git-scm.com/"><img  alt="Git"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/149677999-f5947f0b-e535-4ba2-911c-1c5926045c35.png"><a/>
  <a href="https://yarnpkg.com"><img  alt="Yarn"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/197615074-2e78b82c-b853-455c-8920-272cf1ce6399.svg"><a/>
    <a href="https://insomnia.rest"><img  alt="Insominia"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/207575706-bfbacb34-8941-4f78-ab3b-e3647c0eccba.png"><a/> 
     <a href="https://swagger.io"><img  alt="Swagger"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/208250596-2701702f-caf8-4ca7-9847-32b35ea47cd3.svg"><a/>
     
<hr>
  
  
   <!------------------------------------SUMMARY-->
<p align="center">
  <a href="https://github.com/DIGOARTHUR/Proffy/tree/master/server_backend#--api-">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/Proffy/tree/master/server_backend#-banco-de-dados"> Banco de Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/Proffy/tree/master/server_backend#-banco-de-dados"> Stacks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/Proffy/tree/master/server_backend#-banco-de-dados">Rodando Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/DIGOARTHUR/Proffy/tree/master/server_backend#documentação">Documentação (SWAGGER)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>  


   <!------------------------------------DESCRIPTION-->
# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/148622497-164365e8-f6b0-4f40-bc75-a0ed4da6059b.png">  Sobre a aplicação <!---write here : talk a little about project: what's does, example.  -->
> Esta é a "ponte" entre o Banco de Dados (Sqlite) e as aplicações Mobile e WEB. A API recebe, envia e trata dados pertinentes a cadastros e consultas.



<!------------------------------------API -->

# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/207826327-6a06202f-d42c-4413-9ca0-7dc425db4e30.png">  API <!---write here : demonstration of the application layout.  -->

## EndPoints

| Requisição | Parâmetro| Endpoints                                  | Função
|------------|----------|--------------------------------------------|--------------
|    POST    | Body      | http://localhost:3333/classes              | Adiciona uma nova aula a partir dos dados do Educador {name,avatar,whatsapp,bio...}, Matéria e Horário
|    GET     | Query     | http://localhost:3333/classes              | Lista as aulas partir dos dados passados como {Matéria, Data e Horário}
|    POST    | Body      | http://localhost:3333/connections          | Adiciona uma nova conexão a partir do ID do professor selecionado, clicado na Aplicação.
|    GET     |          | http://localhost:3333/connections          | Obtém o número de conexões a partir total de dados contido no Banco de Dados.

  


<!------------------------------------Banco de dados -->

# <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/207851896-563ca89c-4f1c-4db3-b2d8-b584165e94e9.png"> Banco de Dados<!---write here : demonstration of the application layout.  -->
  
> O banco de dados utilizado foi o [`SQLite`](https://insomnia.rest/download), pela a versatilidade de inicialização e seguimento do projeto passado pela a Rockeseat.   
* [`FileBD`](https://github.com/DIGOARTHUR/Proffy/blob/master/server_backend/src/database/database.sqlite)
  * path: 
       ```
         └── src
               ├── database 
                         ├── database.sqlite
       ```
💡 Acesse os dados direto do arquivo contidos no FileDB em [`sqlite-viewer`](https://inloop.github.io/sqlite-viewer/). Faça o download e insira na 
  
  
  
  <!------------------------------------LIST: STACKS , LIBS & TOOLS-->

## <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/197614534-e12fb94a-b5cf-44ff-8d57-debad7299b0b.png"> Stacks <!---write here: learned concepts; -->

### Lógica & Superset 
*  <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-JavaScript-/?logo=JavaScript&logoColor=white&color=yellow)<a/>
   * [`Map`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map) (Iteração com retorno de conteúdo trabalhado, com outro formato, contexto.)
   * [`Async/Await`](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=CjwKCAiAy_CcBhBeEiwAcoMRHP057AHVSafGTByvpQ_RuriqgKf3g4LI7SW7FXz2Pnbmp-p47_V9lBoChU0QAvD_BwE)(Método para se trabalhar com processo assíncronos. Aguarda o recebimento de dados vindo de uma API.)
   * [`Split`](https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254)(Método que quebra strings, separa a partir de um caracter.)
*  <a href="https://devdigoarthur.notion.site/Map-a87c73417a064372b122bf448f4c6ed4"> ![Alt ou título da imagem](https://img.shields.io/badge/-Typescript-/?logo=TypeScript&logoColor=white&color=blue)<a/>
   * [`Tipagem`](https://www.typescriptlang.org)(Por meio do TypeScript é possivel tipar a linguagem JavaScript)
     * [`Interface`](https://www.typescriptlang.org/docs/handbook/2/objects.html)(É uma forma de estruturar a tipagem de um conjunto de dados e denominá-la no parâmetro da função, por exemplo)
     
     


   
### Framework / Libs 
  
* <a href="https://reactjs.org"> ![Alt ou título da imagem](https://img.shields.io/badge/-NodeJS-/?logo=Node.js&logoColor=white&color=green)<a/> 
  * [`NodeJS`](https://reactjs.org/docs/components-and-props.html) ( É um Software baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web)
    * [`Express`]()( Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web)
     
* <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"> ![Alt ou título da imagem](https://img.shields.io/badge/-SQLite-/?logo=SQLite&logoColor=white&color=gray)<a/> 
    * [`SQLite`](https://insomnia.rest/download)( SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.) 
      * [`sqlite3`](https://insomnia.rest/download)( É uma bliblioteca para que o NodeJS  consiga se conectar com o banco Sqlite.)  
      * [`knex`](https://insomnia.rest/download)( É uma biblioteca que funciona como um query builder, ele permite escrever as querys em JavaScript .) 
     
* <a href="https://insomnia.rest"> ![Alt ou título da imagem](https://img.shields.io/badge/-Insominia-/?logo=Insomnia&logoColor=white&color=blueviolet)<a/> 
  * [`Insomnia`](https://insomnia.rest)( Insomnia é um framework Open Source para desenvolvimento/teste de API Clients. Ele pode ser usado para envio de requisições REST, SOAP, GraphQ e GRPC)
  
* <a href="https://swagger.io"> ![Alt ou título da imagem](https://img.shields.io/badge/-Swagger-/?logo=Swagger&logoColor=white&color=success)<a/> 
  * [`Swagger`](https://swagger.io )(É um software que auxilia na Documentação da API construída, podendo também auxiliar na descrição, consumo e visualização de serviços.)
     
     
 ### Versionameto
 <a href="https://git-scm.com"> ![Alt ou título da imagem](https://img.shields.io/badge/-Git-/?logo=Git&logoColor=white&color=red)<a/> 
 ### IDE
 <a href="https://code.visualstudio.com"> ![Alt ou título da imagem](https://img.shields.io/badge/-VisualStudioCode-/?logo=VisualStudioCode&logoColor=white&color=informational)<a/> 
   

 
  <!------------------------------------RUN APP-->
 
 # <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/142216697-dd93272c-c614-4664-9d63-c4e4dfc3e0f3.gif"> Rodando a Aplicação
 

1. Clonar repositório:

```
git clone https://github.com/DIGOARTHUR/Proffy
```

2. Acessar o diretório server_backend

3. Instalar dependências

```
yarn install
```

4. Rodar aplicação

```
yarn start
```
✅ Pronto! API já está rodando.
        
 # <img  alt="skills"  width="40" height="40" src="https://user-images.githubusercontent.com/59892368/208256482-0acbabaa-2b6c-474f-9602-adbdac14b0ed.svg"> Documentação

💡  Acesse a Documentação em [`Swagger`](http://localhost:3333/api-docs/#/) para a descrição, consumo e visualização dos dados. 

|                             Documentação                             |
| :-------------------------------------------------------------------: |
|   ![image](https://user-images.githubusercontent.com/59892368/208294815-0c2b39c0-fa71-4c71-a2cc-eaccbffea1cb.png) |

 
 





<!---
 Funcionalidades

 Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;
# Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtrar por matéria, dia da semana, e horário; 
  
  -->
