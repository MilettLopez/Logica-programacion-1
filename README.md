# Logica-programacion-1
# Analizador y Ordenador de Números en JavaScript

Este proyecto es una aplicación web interactiva desarrollada en JavaScript que solicita tres números al usuario, los valida y determina cuál es el mayor, el del centro y el menor. Además, muestra los datos ordenados en sentido ascendente y descendente, e identifica cuando todos los números ingresados son iguales.

---

##  Características

- **Validación de entradas:** Garantiza que el usuario ingrese números válidos mediante un bucle de control, evitando campos vacíos, valores nulos o cadenas de texto no numéricas.
- **Análisis de valores:** Identifica de forma precisa:
  - Número mayor
  - Número del centro
  - Número menor
- **Ordenamiento numérico:** Presenta los números ordenados de:
  - **Mayor a menor** (orden descendente)
  - **Menor a mayor** (orden ascendente)
- **Detección de duplicados e igualdad:** Notifica de forma clara si los tres números son completamente iguales.
- **Salida multicanal:** Muestra los resultados de forma simultánea a través del **DOM** (pantalla del navegador).

---

## Estructura del Proyecto

```text
.
├── index.html    # Estructura principal de la página HTML
└── script.js     # Lógica en JavaScript para entrada, validación y ordenamiento