---
title: Creación del Accounting Service
sidebar_position: 1
---

# 🛠️ Creación del Accounting Service

En este tutorial se explica el proceso de creación del **Accounting Service** utilizando NestJS, como parte de la arquitectura de microservicios del proyecto IA Lab.

---

## 🎯 Objetivo

Crear un microservicio base que permita:

- Organizar lógica contable  
- Escalar funcionalidades progresivamente  
- Integrarse con otros servicios del sistema  

---

## 🧱 Paso 1: Crear el proyecto

Desde la carpeta `backend/services`, ejecutar:

```bash
nest new accounting-service
````

Seleccionar:

* **npm** como gestor de paquetes

---

## 📁 Paso 2: Estructura inicial

Al crear el proyecto, NestJS genera la siguiente estructura:

```text
src/
 ├── app.controller.ts
 ├── app.service.ts
 ├── app.module.ts
```

Esta es una estructura base lista para comenzar a desarrollar.

---

## ⚙️ Paso 3: Ejecutar el servicio

Ingresar a la carpeta del proyecto:

```bash
cd accounting-service
```

Ejecutar:

```bash
npm run start:dev
```

Si todo está correcto, el servidor iniciará en:

```text
http://localhost:3000
```

---

## 🔌 Paso 4: Probar endpoint inicial

Por defecto, NestJS incluye un endpoint básico.

Puedes probarlo en el navegador o con Postman:

```text
GET /
```

Respuesta esperada:

```text
Hello World!
```

---

## 🧠 Paso 5: Preparar para crecimiento

Aunque el proyecto inicia con una estructura simple, es importante tener en cuenta que evolucionará.

Más adelante se puede reorganizar así:

```text
src/
 ├── accounting/
 │    ├── accounting.controller.ts
 │    ├── accounting.service.ts
 │    ├── accounting.module.ts
```

Esto permite separar responsabilidades y escalar el sistema.

---

## 🚧 Estado actual

En esta etapa:

* El servicio está creado
* Funciona correctamente
* Tiene una estructura básica
* Está listo para comenzar a implementar lógica de negocio

---

## 🚀 Próximos pasos

* Crear endpoints reales
* Implementar lógica contable
* Separar el código por módulos
* Integrar con el gateway

---

## 🎯 Conclusión

El Accounting Service es el primer paso hacia la construcción de una arquitectura basada en microservicios.

Comenzar con una estructura simple permite entender mejor el sistema y facilita su evolución futura.

---
