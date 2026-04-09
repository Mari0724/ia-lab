---
title: Visión general del proyecto
sidebar_label: Visión general del proyecto
sidebar_position: 2
---

# 📌 Visión general del proyecto

IA Lab es un sistema modular diseñado para experimentar, construir y escalar soluciones basadas en microservicios.

El proyecto está estructurado para separar claramente las responsabilidades y permitir el crecimiento progresivo del sistema.

---

## 🧩 Componentes del sistema

El sistema está compuesto por tres partes principales:

### 🔹 Gateway

El gateway actúa como el punto de entrada del sistema.

- Recibe las solicitudes del cliente  
- Centraliza el acceso a los servicios  
- Gestiona la comunicación entre frontend y backend  

---

### 🔹 Servicios

Los servicios contienen la lógica de negocio y están organizados por dominio.

Ejemplo actual:

- **accounting-service** → encargado de la lógica contable  

Cada servicio:

- Funciona de manera independiente  
- Puede escalar de forma individual  
- Se comunica con el gateway  

---

### 🔹 Frontend

El frontend está construido con Angular y se encarga de:

- Mostrar la información al usuario  
- Consumir los endpoints del backend  
- Gestionar la interacción del usuario  

---

## 🔄 Flujo general del sistema

El flujo básico de una solicitud es:

```text
Cliente → Frontend → Gateway → Servicio → Respuesta
````

Este flujo permite:

* Centralizar el acceso
* Controlar las solicitudes
* Mantener una arquitectura organizada

---

## 🎯 Objetivo del sistema

El sistema busca:

* Facilitar la construcción de soluciones escalables
* Aplicar buenas prácticas de arquitectura
* Integrar múltiples tecnologías de forma ordenada

---

## 🚀 Estado actual

Actualmente el proyecto se encuentra en una fase inicial donde:

* Se está definiendo la estructura base
* Se están implementando los primeros servicios
* Se está construyendo la documentación

---

## 🔜 Próximos pasos

* Ampliar la cantidad de servicios
* Mejorar la comunicación entre componentes
* Integrar nuevas funcionalidades progresivamente

---
