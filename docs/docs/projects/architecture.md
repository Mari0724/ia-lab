---
title: Arquitectura del sistema
sidebar_label: Arquitectura
sidebar_position: 3
---

# 🏗️ Arquitectura del sistema

La arquitectura de IA Lab está basada en un enfoque de microservicios, donde cada componente del sistema cumple una responsabilidad específica y puede evolucionar de forma independiente.

## 🧠 Enfoque de diseño

El sistema no fue diseñado como una arquitectura compleja desde el inicio.  
Se construyó de forma progresiva, comenzando con una estructura simple y evolucionando a medida que aumentaban las necesidades del proyecto.

Este enfoque permite:

- Reducir complejidad inicial  
- Facilitar el aprendizaje  
- Mantener control sobre el sistema  
- Escalar de forma ordenada  

---

## 🔄 Evolución de la arquitectura

### 🔹 Etapa inicial

Estructura básica de un proyecto en NestJS:

```text
src/
 ├── app.controller.ts
 ├── app.service.ts
 ├── app.module.ts
````

En esta etapa:

* Toda la lógica se concentra en pocos archivos
* El objetivo es construir funcionalidad rápidamente

---

### 🔹 Etapa intermedia

A medida que el sistema crece, se separa por dominios:

```text
src/
 ├── accounting/
 │    ├── accounting.controller.ts
 │    ├── accounting.service.ts
 │    ├── accounting.module.ts
```

En esta etapa:

* Se organiza el código por responsabilidades
* Mejora la mantenibilidad

---

### 🔹 Etapa actual (IA Lab)

El sistema evoluciona hacia una arquitectura basada en microservicios:

```text
backend/
 ├── gateway/
 └── services/
      └── accounting-service/
```

En esta etapa:

* Cada servicio es independiente
* Existe un punto de entrada central (gateway)
* Se facilita la escalabilidad del sistema

---

## 🧩 Componentes principales

### 🔹 Gateway

* Punto de entrada del sistema
* Recibe las solicitudes del cliente
* Redirige las peticiones a los servicios correspondientes

---

### 🔹 Servicios

Cada servicio representa un dominio específico.

Ejemplo:

* **accounting-service** → lógica contable

Responsabilidades:

* Procesar datos
* Ejecutar lógica de negocio
* Responder al gateway

---

### 🔹 Frontend

* Construido con Angular
* Consume los endpoints expuestos por el gateway
* Proporciona la interfaz al usuario

---

## ⚠️ Decisiones importantes

Durante el desarrollo se evitó:

* Crear múltiples módulos sin necesidad
* Sobrediseñar la arquitectura desde el inicio
* Introducir complejidad innecesaria

---

## 🔥 Principio clave

> La arquitectura debe evolucionar con el sistema, no anticiparse a él.

---

## 🎯 Beneficios del enfoque

* Mejor organización del código
* Escalabilidad progresiva
* Separación clara de responsabilidades
* Mayor facilidad de mantenimiento

---

## 🚀 Próximos pasos

* Integración entre microservicios
* Implementación de comunicación entre servicios
* Incorporación progresiva de nuevas funcionalidades (como IA o procesamiento de datos)

---
