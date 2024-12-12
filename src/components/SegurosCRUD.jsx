import React, { useState } from "react";


const SegurosCRUD = () => {
    // Estado inicial con datos ficticios
    const [seguros, setSeguros] = useState([
      { id: 1, nombre: "Juan Pérez", vehiculo: "Toyota Corolla", poliza: "ABC123", vigencia: "2024-12-31" },
      { id: 2, nombre: "María Gómez", vehiculo: "Honda Civic", poliza: "XYZ789", vigencia: "2025-06-15" },
    ]);
  
    const [formData, setFormData] = useState({ id: null, nombre: "", vehiculo: "", poliza: "", vigencia: "" });
    const [isEditing, setIsEditing] = useState(false);
  
    // Manejar cambios en el formulario
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Agregar un nuevo seguro
    const handleAdd = (e) => {
      e.preventDefault();
      const newSeguro = { ...formData, id: Date.now() };
      setSeguros([...seguros, newSeguro]);
      setFormData({ id: null, nombre: "", vehiculo: "", poliza: "", vigencia: "" });
    };
  
    // Editar un seguro existente
    const handleEdit = (seguro) => {
      setFormData(seguro);
      setIsEditing(true);
    };
  
    // Guardar cambios en un seguro
    const handleUpdate = (e) => {
      e.preventDefault();
      setSeguros(
        seguros.map((seguro) => (seguro.id === formData.id ? formData : seguro))
      );
      setFormData({ id: null, nombre: "", vehiculo: "", poliza: "", vigencia: "" });
      setIsEditing(false);
    };
  
    // Eliminar un seguro
    const handleDelete = (id) => {
      setSeguros(seguros.filter((seguro) => seguro.id !== id));
    };
  
    return (
      <div className="seguros-crud">
        <h1>Gestión de Seguros de Vehículos</h1>
  
        {/* Formulario */}
        <form onSubmit={isEditing ? handleUpdate : handleAdd}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del cliente"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="vehiculo"
            placeholder="Vehículo"
            value={formData.vehiculo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="poliza"
            placeholder="Póliza"
            value={formData.poliza}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="vigencia"
            value={formData.vigencia}
            onChange={handleChange}
            required
          />
          <button type="submit">{isEditing ? "Actualizar" : "Agregar"}</button>
        </form>
  
        {/* Tabla */}
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Vehículo</th>
              <th>Póliza</th>
              <th>Vigencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {seguros.map((seguro) => (
              <tr key={seguro.id}>
                <td>{seguro.nombre}</td>
                <td>{seguro.vehiculo}</td>
                <td>{seguro.poliza}</td>
                <td>{seguro.vigencia}</td>
                <td>
                  <button onClick={() => handleEdit(seguro)}>Editar</button>
                  <button onClick={() => handleDelete(seguro.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default SegurosCRUD;