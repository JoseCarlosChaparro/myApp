// HomeScreenWeb.tsx
import React from 'react';
import { Platform, View, Text } from 'react-native';
// Asegúrate de instalar Bootstrap: npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemedText } from '@/components/ThemedText';

const HomeScreen: React.FC = () => {
    return (
      // Usamos un View principal para la estructura general
      <View style={{ flex: 1 }}>
        {/* Nota: Debido a que trabajamos en un entorno web, envolvemos el contenido en un <div> con clases de Bootstrap */}
        <div className="container">
          {/* Navbar usando clases de Bootstrap */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Mi App</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Inicio <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Características
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Precios
                  </a>
                </li>
              </ul>
            </div>
          </nav>
  
          {/* Sección principal: Jumbotron */}
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="jumbotron">
                <ThemedText>
                  Bienvenido a Mi App
                </ThemedText>
                <ThemedText>
                  Esta es una interfaz de ejemplo utilizando Bootstrap con React Native Web
                  y un componente de texto temático.
                </ThemedText>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <button type="button" className="btn btn-primary btn-lg">
                Llamada a la acción
              </button>
            </div>
          </div>
  
          {/* Sección de Cards para mostrar contenido */}
          <div className="row mt-5">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de ejemplo"/>
                <div className="card-body">
                  <ThemedText className="card-title" style={{ fontWeight: 'bold' }}>
                    Título de la Card
                  </ThemedText>
                  <ThemedText className="card-text">
                    Texto descriptivo rápido para construir sobre el título y detallar el contenido de la card.
                  </ThemedText>
                  <button className="btn btn-primary">Ver detalle</button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de ejemplo"/>
                <div className="card-body">
                  <ThemedText className="card-title" style={{ fontWeight: 'bold' }}>
                    Título de la Card
                  </ThemedText>
                  <ThemedText className="card-text">
                    Otro ejemplo rápido de texto para complementar el contenido de la card.
                  </ThemedText>
                  <button className="btn btn-primary">Ver detalle</button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagen de ejemplo"/>
                <div className="card-body">
                  <ThemedText className="card-title" style={{ fontWeight: 'bold' }}>
                    Título de la Card
                  </ThemedText>
                  <ThemedText className="card-text">
                    Una breve descripción para ayudar a entender el contenido de esta sección.
                  </ThemedText>
                  <button className="btn btn-primary">Ver detalle</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer sencillo */}
          <footer className="mt-5 text-center">
            <ThemedText className="text-muted">
              &copy; 2025 Mi App. Todos los derechos reservados.
            </ThemedText>
          </footer>
        </div>
      </View>
    );
  };
  
  export default HomeScreen;