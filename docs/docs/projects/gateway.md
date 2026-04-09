---
title: Gateway
sidebar_label: Gateway
sidebar_position: 4
---

# 🌐 Gateway

El **Gateway** es el punto de entrada principal del sistema IA Lab.  
Se encarga de recibir todas las solicitudes del cliente y redirigirlas hacia los microservicios correspondientes.

---

## 📌 Descripción

El gateway actúa como intermediario entre el frontend y los servicios del backend.

Sus principales funciones son:

- Centralizar el acceso al sistema  
- Redirigir solicitudes a los servicios adecuados  
- Servir como punto de control para futuras funcionalidades  

Actualmente se encuentra en una fase inicial de desarrollo.

---

## ⚙️ Estado actual

En esta etapa, el gateway cuenta con:

- Estructura base generada con NestJS  
- Controlador principal (`app.controller.ts`)  
- Servicio principal (`app.service.ts`)  
- Módulo raíz (`app.module.ts`)  

👉 Aún no se ha implementado la comunicación con otros servicios.

---

## 🧩 Responsabilidades

El gateway está diseñado para:

- Recibir solicitudes del cliente (frontend)  
- Determinar a qué servicio deben dirigirse  
- Actuar como capa de abstracción entre cliente y servicios  
- Facilitar la integración de nuevos microservicios  

---

## 🔄 Flujo de funcionamiento

El flujo general del sistema es:

```text
Cliente → Frontend → Gateway → Servicio → Respuesta
````

El gateway se encarga de:

1. Recibir la petición
2. Procesarla (validaciones futuras)
3. Redirigirla al servicio correspondiente
4. Retornar la respuesta al cliente

---

## 🏗️ Estructura del proyecto

Actualmente, el gateway mantiene una estructura simple:

```text
src/
 ├── app.controller.ts
 ├── app.service.ts
 ├── app.module.ts
```

Esta estructura permitirá una refactorización progresiva a medida que aumente la complejidad.

---

## 🔄 Evolución esperada

A medida que el sistema crezca, el gateway evolucionará hacia una estructura más robusta:

```text
src/
 ├── routes/
 ├── middleware/
 ├── interceptors/
 ├── guards/
```

Y podrá incluir funcionalidades como:

* Autenticación y autorización
* Validación de datos
* Logging de solicitudes
* Manejo centralizado de errores

---

## 🔗 Relación con otros componentes

El gateway se comunica con:

* **Frontend** → recibe solicitudes
* **Microservicios** → envía solicitudes y recibe respuestas

Ejemplo:

* Gateway → accounting-service

---

## 🚧 Próximos pasos

* Implementar rutas reales hacia microservicios
* Configurar comunicación entre servicios
* Añadir validaciones básicas
* Preparar estructura para autenticación

---

## 🎯 Objetivo a largo plazo

Convertir el gateway en un componente central capaz de:

* Gestionar múltiples servicios
* Controlar el acceso al sistema
* Escalar junto con la arquitectura

---

> El gateway es una pieza clave en la arquitectura del sistema y evolucionará progresivamente conforme crezca el proyecto.

---
