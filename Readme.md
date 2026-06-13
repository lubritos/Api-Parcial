
# Proyecto: Sistema Hospital

## Descripción

Vamos a desarrollar la lógica de una aplicación segura y modular para la gestión de un sistema de turnos médicos, utilizando Node.js, Express y MongoDB, que implemente operaciones CRUD, autenticación por JWT, control de acceso por roles y testing.
---

## ¿Por qué este proyecto?

Este proyecto fue creado como una práctica para aprender los fundamentos de Programacion 2 y cómo estructurar proyectos simples.




### 💻 Gestión de Usuarios

Registro y login de usuarios.
Hash de contraseñas.
Autenticación con JWT. (Roles: admin, cliente)
Middleware para proteger rutas y restringir acceso según rol.

### 💻 Gestión de Turnos

CRUD completo de turnos (admin).
Validación de datos (precio, nombre requerido, etc.).
Estructura del turno: fecha, hora, profesional, paciente, especialidad, etc.

### 💻 Gestión de Turnos

Crear turno (paciente), vinculando turnos y profesional.
Ver historial de turnos (paciente).
Consultar todos los turnos (admin), modificar estado (pendiente, enviado, cancelado).
Lógica de control de agenda, consulta filtrando por especialidad, profesional, etc.

## Listado de Tareas

[x] Crear Login de usuarios.
[x] Crear Registro de usuarios.
[x] Agregar roles de usuarios (admin, cliente)
[x] Codificar Contraseña

[x] Crear Listado de Profesionales
[x] ver y Editar Profesional
[x] Eliminar Profesional

[x] Crear Listado de Turnos
[x] Filtrar Listado por especialidad o Profesional
[x] Ver y editar Turno
[x] Eliminar Turno

[] Agregar Testing Unitario
[x] Mostrar Secciones por Rol (Admin)
[x] Cambiar Valor del paciente, por nombre del usuario logueado.

### Estructura del Proyecto

-- public
-- src
   | - tests
   | - config
   | - controller
   | - middlewares
   | - models
   | - routes
   | - services
   index.js

---

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
   git clone https://github.com/lubritos/Api-Parcial.git
```

2. Navega al directorio del proyecto:

```bash
cd API-PARCIAL
```

3. Asegúrate de tener Node.js instalado en tu sistema.


4. Instala las dependencias:

```bash
npm install
```

5. Ejecuta el programa:

```bash
npm run start
```
