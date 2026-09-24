# Producto V: Gestión de Configuración de Software (SCM), Control de Versiones Avanzado y Pipelines CI/CD

**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad |
| :--- | :--- | :--- |
| 👑 **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** / Estrategia SCM, Gobernanza de Calidad y Trunk-Based |
| 💻 **Andrés Gómez** | V-31.085.717 | Desarrollador / Pipelines CI/CD, Quality Gates y Automatización |
| 💻 **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Contenedores Docker, Multi-stage Builds e IaC |
| 💻 **José Silva** | V-30.810.283 | Desarrollador / Flujos de Trabajo Git, Pull Requests y Hotfixes |

---

## 📌 Descripción General del Producto V

El **Producto V** profundiza en los fundamentos y prácticas avanzadas de la **Gestión de Configuración de Software (SCM)** moderna y la cultura **DevOps**. Se analiza la evolución radical desde las juntas de control de cambios burocráticas y manuales hacia la automatización declarativa (*Everything as Code*).

Se abordan estrategias de ramificación ágiles, diseño seguro de Pull Requests con *Quality Gates* automatizados en pipelines de Integración Continua (CI), containerización reproducible con Docker y la erradicación del síndrome *"funciona en mi máquina"*.

---

## 📚 Documentos, Ejercicios y Artefactos Incluidos

A continuación se detalla el contenido desarrollado en este entregable:

---

### 🔀 Pregunta 1: Flujo de Trabajo en Git y Pull Requests (Control de Cambios Moderno)
* **Caso de Estudio:** SaaS de facturación donde se desarrolla una nueva funcionalidad (`feature/pdf-export`) mientras ocurre un fallo crítico de autenticación en producción que exige un *hotfix* urgente en `main`.
* **Desarrollo y Solución:**
  * **Secuencia de Comandos Git (GitHub Flow):**
    * *Publicación Segura de la Feature:* Creación de rama, commits atómicos, rebase/actualización respecto a `main` y apertura de Pull Request.
    * *Aplicación del Hotfix:* Creación inmediata de `hotfix/login-auth-fix` desde la etiqueta/commit de producción en `main`, resolución, validación por CI, merge expedito y propagación hacia las ramas de desarrollo activas.
  * **Plantilla de Pull Request (PR Template):**
    * Estructura estándar con: *Descripción del Cambio*, *Tipo de Cambio*, *Impacto en Producción*, *Checklist de Calidad* (pruebas unitarias, análisis de seguridad de dependencias de terceros como generadores PDF) y *Evidencias de Pruebas*.
  * **Quality Gates Automatizados en el Pipeline CI:**
    1. **Gate 1 - Linting y Análisis Estático (SAST):** Aprobación de reglas de estilo y escaneo de vulnerabilidades sin fallos críticos.
    2. **Gate 2 - Suite de Pruebas Unitarias e Integración:** Cobertura mínima de código (Code Coverage ≥ 80%) y cero pruebas fallidas.
    3. **Gate 3 - Escaneo de Dependencias (SCA) y Build de Contenedor:** Verificación de licencias, detección de CVEs y construcción exitosa de la imagen Docker.

---

### 🐳 Ejercicio 2: Everything as Code y Gestión de Entornos Reproducibles
* **Caso de Estudio:** Superación del síndrome *"funciona en mi máquina"* mediante containerización estandarizada de una aplicación Node.js (`server.js`, puerto 8080).
* **Desarrollo y Solución:**
  * **Dockerfile Optimizado:**
    * Implementación de buenas prácticas: uso de imágenes base ligeras (`node:alpine` / distroless), aprovechamiento del caché de capas (copia aislada de `package*.json`), ejecución con usuario sin privilegios (`USER node`), definición de variables de entorno y comando de arranque no bloqueante.
  * **Trazabilidad y Auditoría (IaC vs. Logs Manuales):**
    * Demostración de cómo la Infraestructura como Código (IaC) versionada en Git proporciona auditoría inmutable (`git blame`, `git log`), reversiones inmediatas (*rollbacks* atómicos) y entornos de desarrollo, testing y producción idénticos sin deriva de configuración (*Configuration Drift*).

---

### 🌿 Pregunta 3: Análisis de Modelos de Ramificación (GitFlow vs. Trunk-Based Development)
* **Marco Teórico:** Conceptos y métricas del libro *Accelerate: The Science of Lean Software and DevOps* (Forsgren, Humble y Kim).
* **Hallazgos:**
  * **GitFlow:** Ramas de larga duración (`develop`, `release`, `feature`), merges masivos periódicos (*merge hell*) y retraso artificial en la retroalimentación.
  * **Trunk-Based Development:** Integración diaria o varias veces al día a una única rama troncal (`main`/`trunk`) utilizando *Feature Flags/Toggles* para desacoplar el despliegue del lanzamiento al usuario final.
  * **Prácticas SCM Obligatorias:** Testeo continuo rápido (< 10 minutos), revisión ágil de PRs de corta duración y disciplina de *Build Break* (prioridad máxima de arreglo si se rompe la rama troncal).

---

### 🏛️ Pregunta 4: Evolución del Control de Cambios (La Decadencia de la CCB Tradicional)
* **Análisis Crítico:** La Junta de Control de Cambios tradicional (*Change Advisory Board - CAB/CCB*) programada semanal o mensualmente actúa como cuello de botella artificial que incrementa el tamaño de los lotes (*batch size*) y multiplica el riesgo de fallas catastróficas.
* **Paradigma Moderno:** La combinación de **Pull Requests + Pipeline CI/CD** materializa el *Control de Cambios Continuo*, donde cada commit es auditado, validado por pruebas automáticas y aprobado por revisión de pares (*Peer Review*) en minutos, garantizando mayor seguridad y trazabilidad que las firmas manuales.

---

### 📄 Pregunta 5: Artefactos y Auditoría en la SCM Moderna
* **Transición del Plan SCM en Word a Código:** En la era DevOps, las políticas de configuración viven en el repositorio:
  1. `.gitignore`: Preserva la limpieza del historial evitando subir artefactos binarios compilados, credenciales y directorios temporales (`node_modules`, `.env`).
  2. `Dockerfile`: Define de forma declarativa e inmutable el entorno de ejecución, sistema operativo y dependencias del servicio.
  3. `.github/workflows/ci.yml`: Codifica la tubería de automatización, pruebas, linters y políticas de calidad.
  4. `package.json` / `package-lock.json`: Fijan de manera determinista el árbol de dependencias del software.

---

### 🎥 Exposición y Sustentación en Video
* **Archivo de referencia:** [`Link al video.txt`](file:///C:/Users/alexm/.gemini/antigravity-ide/scratch/Ingenieria-del-Software-2/Producto%205/Link%20al%20video.txt)
* **Enlace de YouTube:** [https://youtu.be/55Qrpjdx-VT](https://youtu.be/55Qrpjdx-VT)
* **Resumen:** Video defensivo donde el equipo expone los ejercicios de SCM, la estrategia de Pull Requests, el flujo ante incidentes de producción, la arquitectura de contenedores y los principios de entrega continua.

---

## 🎯 Conclusión
El **Producto V** demuestra que la Gestión de Configuración de Software contemporánea no es un proceso administrativo estático, sino una capacidad técnica medular basada en la automatización, la infraestructura declarativa y la retroalimentación continua. Adoptar *Trunk-Based Development*, *Quality Gates* automatizados y contenedores es la base para lograr despliegues de software seguros, rápidos y de alta confiabilidad.
