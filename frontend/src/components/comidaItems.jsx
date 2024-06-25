import React, { useState } from 'react';

const alimentos = [
  'Hamburguesa Comun',
  'Hamburguesa Especial',
  'Milanesa Comun',
  'Milanesa Especial',
  'Lomito Comun',
  'Lomito Especial',
  '1/2 Mexicano',
  'Mexicano',
  'Pizza',
  'Papas fritas',
];

const BusquedaDeComida = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const alimentosFiltrados = alimentos.filter(alimento =>
    alimento.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-primary rounded-xl shadow-md space-y-4 m-2">
      <input
        type="text"
        placeholder="Buscar comida..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
      />
      {terminoBusqueda && (
        <ul className="mt-4 border rounded-lg shadow-lg bg-white">
          {alimentosFiltrados.length > 0 ? (
            alimentosFiltrados.map((alimento, index) => (
              <li key={index} className="py-2 px-4 border-b last:border-b-0">
                {alimento}
              </li>
            ))
          ) : (
            <li className="py-2 px-4">No se encontraron resultados</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default BusquedaDeComida;
