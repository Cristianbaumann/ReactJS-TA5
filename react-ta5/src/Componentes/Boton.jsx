import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar' : 'Mostrar'} Texto
      </button>
      {isVisible && <p>¡Este es el texto que aparece y desaparece!</p>}
    </div>
  );
}

export default ToggleText;
