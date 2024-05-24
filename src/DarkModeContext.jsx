import { createContext, useState } from 'react';

// Crear el contexto
const isDarkOrLight = createContext();

// Componente que envuelve la aplicación y proporciona el contexto
// eslint-disable-next-line react/prop-types
const DarkModeContext = ({ children }) => {
    const [isLight, setIsLight] = useState(false); // Cambié el nombre de la variable a isLight
    return (
        <isDarkOrLight.Provider value={{ isLight, setIsLight }}>
            {children}
        </isDarkOrLight.Provider>
    );
};

// Exportar el contexto y el proveedor
// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeContext, isDarkOrLight };