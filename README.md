# Financial Products App

## Descripción

Aplicación para la gestión de productos financieros. Este proyecto incluye un frontend en React Native y un backend en Node.js.

## Requisitos

- Node.js
- npm
- Emulador de Android o dispositivo físico

## Instalación

### Clonación del Repositorio

1. Clona el repositorio de GitHub:

```bash
git clone https://github.com/YerikAH/financial-products-app
```

### Frontend

1. Cambia al directorio del cliente:

```bash
cd client
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el siguiente comando para correr la aplicación de manera local:

```bash
npm run android
```

### Backend (Opcional y recomendado)

1. Navega a la carpeta del servidor desde la raíz del proyecto:

```bash
cd server
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el siguiente comando para iniciar el servidor en modo desarrollo:

```bash
npm run start
```

## Configuración

1. Dirígete al archivo de configuración del cliente:

```bash
/client/src/config.ts
```

3. Modifica la URL de la API:

```typescript
apiUrl: "https://financial-products-app.onrender.com/bp";
```

por esta:

```typescript
apiUrl: "http://{ip}/bp";
```

Reemplaza {ip} con tu dirección IP local, por ejemplo:

```typescript
apiUrl: "http://0.0.0.0/bp";
```

## Enlaces

- Repositorio público de GitHub: https://github.com/YerikAH/financial-products-app
- Archivo apk de la aplicación: https://drive.google.com/drive/folders/1-RtR6zgE-U5E_kAGVydpvPUb3aSYnZjM?usp=sharing
