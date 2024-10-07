import './App.css';
import Testimonio from './Componentes/Testimonio';

function App() {
  const people = [
    {
      id: 1,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Clown_chili_peppers.jpg',
      imageAlt: 'Alister el payasito',
      name: 'Alister',
      location: 'Wakanda',
      description: 'Payasito profesional experto en React',
      testimony:
        'React me permitió desarrollar interfaces de usuario interactivas de forma eficiente. La reutilización de componentes hizo que el código fuera más mantenible y escalable, lo cual agilizó el proceso de desarrollo.',
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/foto-gratis/retrato-mujer-mayor_23-2150767007.jpg',
      imageAlt: 'Alondra la señora mayor',
      name: 'Alondra',
      location: 'Sardina',
      description: 'Experta en React desde el principio de los tiempos',
      testimony:
        'Al implementar React en nuestro proyecto, la curva de aprendizaje fue rápida, y la documentación es muy clara. La virtual DOM optimizó el rendimiento, lo que mejoró significativamente la experiencia de usuario en nuestra aplicación.',
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/736x/b0/0d/e4/b00de461f337dcf5f4971c524d4b8508.jpg',
      imageAlt: 'Daniel el cayetano canario',
      name: 'Daniel',
      location: 'Barcelona',
      description: 'Dieces como panes',
      testimony:
        'Con React, la capacidad de gestionar el estado con herramientas como Redux simplificó la lógica de la aplicación. Es una biblioteca muy flexible que se integra bien con otras tecnologías del stack.',
    },
    {
      id: 4,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dEhbjgmjNQc_JAJJYvv4waAPpHilh4Ps8A&s',
      imageAlt: 'Carlos el hombre araña',
      name: 'Carlos',
      location: 'Nueva York',
      description: 'Algunas arañas tambien programan en web',
      testimony:
        'Trabajar con React me facilitó la creación de componentes reutilizables y modulares. Pude colaborar de manera más fluida con el equipo de desarrollo, ya que el flujo de trabajo es más estructurado y organizado.',
    },
  ];

  return (
    <>
      {people.map((person) => (
        <Testimonio
          key={person.id}
          imageUrl={person.imageUrl}
          imageAlt={person.imageAlt}
          name={person.name}
          location={person.location}
          description={person.description}
          testimony={person.testimony}
        />
      ))}
    </>
  );
}

export default App;
