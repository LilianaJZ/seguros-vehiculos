import React, { useState } from "react";

const VehiculosCRUD = () => {
    const [vehiculos, setVehiculos] = useState([
        {
          id: 1,
          marca: "Toyota",
          modelo: "Corolla",
          color: "Blanco",
          cilindraje: "1800",
          numeroSiniestros: 1,
          estado: "Disponible",
          usuarioId: 101,
        },
        {
          id: 2,
          marca: "Honda",
          modelo: "Civic",
          color: "Negro",
          cilindraje: "2000",
          numeroSiniestros: 0,
          estado: "Mantenimiento",
          usuarioId: 102,
        },
      ]);
      const [formData, setFormData] = useState({
        id: null,
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        numeroSiniestros: "",
        estado: "",
        usuarioId: "",
      });
      const [searchTerm, setSearchTerm] = useState("");
      const [isEditing, setIsEditing] = useState(false);
    
      // Manejar cambios en el formulario
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Manejar la búsqueda
      const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
      // Filtrar vehículos por término de búsqueda
      const filteredVehiculos = vehiculos.filter((vehiculo) => {
        return (
          vehiculo.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehiculo.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehiculo.estado.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    
      // Agregar un nuevo vehículo
      const handleAdd = (e) => {
        e.preventDefault();
        const newVehiculo = { ...formData, id: Date.now() };
        setVehiculos([...vehiculos, newVehiculo]);
        setFormData({
          id: null,
          marca: "",
          modelo: "",
          color: "",
          cilindraje: "",
          numeroSiniestros: "",
          estado: "",
          usuarioId: "",
        });
      };
    
      // Editar un vehículo existente
      const handleEdit = (vehiculo) => {
        setFormData(vehiculo);
        setIsEditing(true);
      };
    
      // Guardar cambios en un vehículo
      const handleUpdate = (e) => {
        e.preventDefault();
        setVehiculos(
          vehiculos.map((vehiculo) => (vehiculo.id === formData.id ? formData : vehiculo))
        );
        setFormData({
          id: null,
          marca: "",
          modelo: "",
          color: "",
          cilindraje: "",
          numeroSiniestros: "",
          estado: "",
          usuarioId: "",
        });
        setIsEditing(false);
      };
    
      // Eliminar un vehículo con confirmación
      const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este vehículo?")) {
          setVehiculos(vehiculos.filter((vehiculo) => vehiculo.id !== id));
        }
      };
    
      // Ordenar los datos
      const handleSort = (column) => {
        const sortedVehiculos = [...vehiculos].sort((a, b) => {
          if (a[column] < b[column]) return -1;
          if (a[column] > b[column]) return 1;
          return 0;
        });
        setVehiculos(sortedVehiculos);
      };
    
      return (
        <div className="vehiculos-crud">
          <h1>Gestión de Vehículos</h1>
    
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar por marca, modelo, color o estado"
            value={searchTerm}
            onChange={handleSearch}
          />
    
          {/* Formulario */}
          <form onSubmit={isEditing ? handleUpdate : handleAdd}>
            <input
              type="text"
              name="marca"
              placeholder="Marca"
              value={formData.marca}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="modelo"
              placeholder="Modelo"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cilindraje"
              placeholder="Cilindraje"
              value={formData.cilindraje}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="numeroSiniestros"
              placeholder="Número de Siniestros"
              value={formData.numeroSiniestros}
              onChange={handleChange}
              required
            />
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione Estado</option>
              <option value="Disponible">Disponible</option>
              <option value="Mantenimiento">Mantenimiento</option>
            </select>
            <input
              type="text"
              name="usuarioId"
              placeholder="ID del Usuario"
              value={formData.usuarioId}
              onChange={handleChange}
              required
            />
            <button type="submit">{isEditing ? "Actualizar" : "Agregar"}</button>
          </form>
    
          {/* Tabla */}
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("marca")}>Marca</th>
                <th onClick={() => handleSort("modelo")}>Modelo</th>
                <th onClick={() => handleSort("color")}>Color</th>
                <th onClick={() => handleSort("cilindraje")}>Cilindraje</th>
                <th onClick={() => handleSort("numeroSiniestros")}>Siniestros</th>
                <th onClick={() => handleSort("estado")}>Estado</th>
                <th>Usuario ID</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehiculos.map((vehiculo) => (
                <tr key={vehiculo.id}>
                  <td>{vehiculo.marca}</td>
                  <td>{vehiculo.modelo}</td>
                  <td>{vehiculo.color}</td>
                  <td>{vehiculo.cilindraje}</td>
                  <td>{vehiculo.numeroSiniestros}</td>
                  <td>
                    <span
                      style={{
                        color: vehiculo.estado === "Disponible" ? "green" : "red",
                      }}
                    >
                      {vehiculo.estado}
                    </span>
                  </td>
                  <td>{vehiculo.usuarioId}</td>
                  <td>
                    <button onClick={() => handleEdit(vehiculo)}>Editar</button>
                    <button onClick={() => handleDelete(vehiculo.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      );
    };

  export default VehiculosCRUD;