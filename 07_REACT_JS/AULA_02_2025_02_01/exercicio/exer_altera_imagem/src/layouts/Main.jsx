import React, { useState } from 'react';

const TrocaImagem = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const TrocaImagem = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <div>
      {showFirstImage ? (
        <img src="URL_DA_PRIMEIRA_IMAGEM" alt="Primeira Imagem" />
      ) : (
        <img src="URL_DA_SEGUNDA_IMAGEM" alt="Segunda Imagem" />
      )}
      <button onClick={TrocaImagem}>Alternar Imagem</button>
    </div>
  );
};

export default TrocaImagem;
