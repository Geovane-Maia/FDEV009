### Desafio: Criando um Projeto React com Vite  
Neste desafio, você criará um projeto React utilizando o Vite para configurar o ambiente de desenvolvimento de forma rápida e eficiente. O objetivo é estruturar a aplicação com componentes React e trabalhar com **Props** e **Children** para exibir informações dinâmicas.  

---

### **Objetivo do Desafio**  
1. Configurar um projeto React com Vite.  
2. Criar uma estrutura de componentes: **Header**, **Main**, **Footer**.  
3. Criar um componente **Produto** que exiba informações de 4 produtos utilizando **Props** e **Children**.  

---

### **Passos do Desafio**  

#### 1. Configurar o Projeto React com Vite  
- Instale o Vite e configure o projeto:  
  ```bash
  npm create vite@latest meu-projeto --template react
  cd meu-projeto
  npm install
  npm run dev
  ```
- Abra o projeto no navegador pelo link fornecido no terminal.  

#### 2. Estruturar o Projeto  
Crie os seguintes componentes:  

##### **Componente Header**  
Exibe um título para o site.  
```jsx
const Header = () => (
  <header style={{ background: "#282c34", color: "white", padding: "1rem" }}>
    <h1>Minha Loja Virtual</h1>
  </header>
);

export default Header;
```

##### **Componente Main**  
A área principal onde os produtos serão exibidos.  
```jsx
const Main = ({ children }) => (
  <main style={{ padding: "2rem" }}>
    <h2>Produtos Disponíveis</h2>
    {children}
  </main>
);

export default Main;
```

##### **Componente Footer**  
Exibe informações de rodapé.  
```jsx
const Footer = () => (
  <footer style={{ background: "#282c34", color: "white", padding: "1rem", textAlign: "center" }}>
    <p>&copy; 2025 Minha Loja Virtual</p>
  </footer>
);

export default Footer;
```

#### 3. Criar o Componente **Produto**  
Exibe os detalhes de cada produto, utilizando **Props** e **Children**.  
```jsx
const Produto = ({ nome, preco, children }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
    <h3>{nome}</h3>
    <p>Preço: R$ {preco}</p>
    <div>{children}</div>
  </div>
);

export default Produto;
```

#### 4. Utilizar os Componentes no App  
Monte o aplicativo em `App.jsx` para exibir os produtos:  
```jsx
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Produto from "./Produto";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Produto nome="Produto 1" preco="100,00">
          <p>Descrição: Produto de alta qualidade.</p>
        </Produto>
        <Produto nome="Produto 2" preco="200,00">
          <p>Descrição: Produto com garantia de 2 anos.</p>
        </Produto>
        <Produto nome="Produto 3" preco="300,00">
          <p>Descrição: Produto exclusivo com edição limitada.</p>
        </Produto>
        <Produto nome="Produto 4" preco="400,00">
          <p>Descrição: Produto premium com recursos avançados.</p>
        </Produto>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
```

#### 5. Testar o Projeto  
- Inicie o servidor de desenvolvimento:  
  ```bash
  npm run dev
  ```
- Visualize a aplicação no navegador, confirme se os 4 produtos aparecem na tela com as descrições dinâmicas.

---

### **Extras (Opcional)**  
- Adicione **CSS** ou bibliotecas como TailwindCSS para estilizar a página.  
- Transforme os produtos em um array e use `map` para renderizá-los dinamicamente.  
- Adicione interatividade, como um botão "Comprar" em cada produto.  

Boa sorte e divirta-se com o desafio! 🚀