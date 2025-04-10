import React from 'react';
import { View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemedText } from '@/components/ThemedText';

const HomeScreenEnhanced: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <div className="container-fluid p-0">
        {/* Navbar unificada en bg-dark */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Características</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Precios</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <ThemedText>
                Bienvenido a Mi App
              </ThemedText>
              <ThemedText style={{ marginTop: 10 }}>
                Esta es una interfaz de ejemplo utilizando Bootstrap con React Native Web
                y un componente de texto temático.
              </ThemedText>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button type="button" className="btn btn-primary btn-lg">
                Llamada a la acción
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4">
              <div className="card shadow-sm mb-4">
                <img
                  src="https://via.placeholder.com/300x150"
                  className="card-img-top"
                  alt="Ejemplo"
                />
                <div className="card-body">
                  <ThemedText style={{ fontWeight: 'bold' }}>
                    Título de la Card
                  </ThemedText>
                  <ThemedText>
                    Texto descriptivo rápido para construir sobre el título y
                    detallar el contenido de la card.
                  </ThemedText>
                  <button className="btn btn-primary mt-2">Ver detalle</button>
                </div>
              </div>
            </div>
            {/* Repite las otras dos cards según tu necesidad */}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-center text-white py-3 mt-5">
          <ThemedText>
            &copy; 2025 Mi App. Todos los derechos reservados.
          </ThemedText>
        </footer>
      </div>
    </View>
  );
};

export default HomeScreenEnhanced;
