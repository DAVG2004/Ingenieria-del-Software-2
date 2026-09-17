# Producto IV: Gestión de Riesgos Técnicos, Ciberseguridad y Deuda Técnica mediante Risk Storming

**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad |
| :--- | :--- | :--- |
| 👑 **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** / Análisis de Riesgos y Gobernanza Ágil |
| 💻 **Andrés Gómez** | V-31.085.717 | Desarrollador / Analista de Ciberseguridad y Supply Chain |
| 💻 **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Analista de Arquitectura Serverless e IA |
| 💻 **José Silva** | V-30.810.283 | Desarrollador / Analista de Deuda Técnica y DevSecOps |

---

## 📌 Descripción General del Producto IV

El **Producto IV** aborda la **gestión de riesgos en la ingeniería de software moderna**, con especial énfasis en arquitecturas emergentes basadas en **Serverless Cloud**, **APIs de Inteligencia Artificial (LLM)**, **ciberseguridad en la cadena de suministro de software (*Supply Chain Attacks*)** y la **gobernanza de la Deuda Técnica**.

A través de la metodología visual y colaborativa **Risk Storming**, el equipo multifuncional trasciende los enfoques burocráticos tradicionales (basados en listas de verificación estáticas manejadas únicamente por el Gerente de Proyectos) para identificar amenazas directamente sobre la arquitectura del sistema y convertirlas en **Historias de Habilitación de Seguridad (*Security Enablers*)** y **Spikes Técnicos** dentro del *Sprint Backlog*.

---

## 📚 Documentos, Actividades y Artefactos Incluidos

A continuación se detallan las actividades analíticas y prácticas desarrolladas en este entregable:

---

### 🌩️ Actividad 1: Risk Storming Simulado para Fintech Mobile (Serverless + API IA)
* **Archivo principal:** [`Actividad 1 Producto IV.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%204/Actividad%201%20Producto%20IV.pdf)
* **Caso de Estudio:** Plataforma móvil de evaluación crediticia ejecutada en arquitectura Serverless (Cloud) integrada con un modelo de IA/LLM vía API de terceros para el cálculo del score crediticio.
* **Identificación de 4 Riesgos por Categoría:**
  * **(a) Técnico / Deuda Técnica:** Acoplamiento directo del backend Serverless a las estructuras de datos JSON de la API externa de IA sin patrón de adaptación (*Adapter Pattern*). *Impacto:* Un *breaking change* destruye las funciones en producción.
  * **(b) Ciberseguridad / Cadena de Suministro (*Supply Chain Attack*):** Inyección de dependencias maliciosas (*Typosquatting*, *Dependency Confusion*) en paquetes Node.js/Python serverless. *Impacto:* Exfiltración masiva de credenciales y datos bancarios/personales de los solicitantes de crédito.
  * **(c) Vendor Lock-in / Nube:** Dependencia exclusiva de servicios propietarios del proveedor cloud (AWS EventBridge, DynamoDB, Step Functions) sin capas de abstracción. *Impacto:* Migración inviable o costos desorbitados ante aumentos de tarifas o caídas regionales.
  * **(d) Ético o Legal / IA:** Evaluación con modelos de IA "caja negra" (*Black Box*) que presentan sesgos algorítmicos demográficos. *Impacto:* Rechazos discriminatorios, sanciones por incumplimiento de la norma *Right to Explanation* y pérdida reputacional.
* **Análisis Cualitativo del Riesgo Crítico (Cadena de Suministro):**
  $$\text{Risk Score} = \text{Probabilidad } (P = 4) \times \text{Impacto } (I = 5) = 20 \quad (\text{Zona Crítica / Prioridad Máxima})$$
* **Traducción al Sprint Backlog (Security Enabler Story):**
  * **ID:** `SEC-104` | **Título:** `[SECURITY ENABLER] Integración de Análisis Automático de Dependencias (SCA) y Generación de SBOM en Pipeline CI/CD` (5 Story Points).
  * **Criterios de Aceptación Tangibles:** Escaneo SCA continuo con Snyk/OWASP, aborto automático de builds (*Build Break*) ante vulnerabilidades High/Critical (CVSS), generación de manifiesto SBOM en formato CycloneDX/SPDX y fijación estricta de versiones (`package-lock.json` / `poetry.lock`).

---

### 📋 Actividad 2: Registro de Riesgos (Risk Register) Híbrido y Gobernanza Ágil
* **Archivo principal:** [`Actividad 2 Producto IV.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%204/Actividad%202%20Producto%20IV.pdf)
* **Registro de Riesgos Vivo (Hoja Única / Dashboard de Auditoría):** Formato compacto y accesible que reemplaza hojas de cálculo extensas. Incluye la matriz completa de riesgos (`RSK-01` a `RSK-04`), dueños asignados (*Risk Owners*), estrategias de respuesta y vinculación a artefactos del backlog.
* **Integración en Ceremonias Scrum:**
  1. **Sprint Planning:** Reserva formal de capacidad/puntos para Spikes y Enablers con alto Risk Score.
  2. **Daily Standup:** Visibilidad en tiempo real de impedimentos y banderas de riesgo en el tablero Kanban.
  3. **Sprint Review:** Transparencia con Stakeholders mostrando entregables funcionales junto con mitigaciones completadas.
  4. **Sprint Retrospective:** Minisesión de 10 minutos para recalibrar o archivar riesgos.
* **Transformación Tangible (Caso RSK-01 - Volatilidad de Tarifas en API IA):**
  * **Artefacto A (Research Spike):** `[SPIKE-IA-01] Diseño del Patrón Adapter y Caché de Respuestas para la API de IA Crediticia` (3 SP, Timebox 2 días).
  * **Artefacto B (Enabling User Story):** `[ENABLER-COST-02] Control de Cuotas y Alertas de Facturación para API de Scoring IA` (5 SP) con middleware de *Rate Limiting*, alertas en CloudWatch/Slack al 80% del presupuesto y *Circuit Breaker* para degradación elegante a reglas tradicionales.

---

### ⚔️ Actividad 3: Análisis Comparativo: Sesión Tradicional vs. Risk Storming
* **Archivo principal:** [`Actividad 3 Producto IV.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%204/Actividad%203%20Producto%20IV.pdf)
* **Matriz Comparativa de Enfoques:**
  * *Liderazgo:* Gerente de Proyectos aislado (Tradicional) vs. Equipo Multifuncional DevSecOps/QA/PO (Risk Storming).
  * *Formato:* Checklist estático en Word/Excel vs. Dinámica colaborativa sobre el mapa visual de arquitectura.
  * *Perspectiva:* Riesgos puramente administrativos/presupuestarios vs. Riesgos profundos de arquitectura, ciberseguridad y código.
  * *Resultados:* Registro archivado e inerte vs. Historias de Habilitación (*Enablers*) y *Spikes* ejecutables en el Sprint Backlog.
* **Ventajas Fundamentales:** Eliminación del punto ciego del PM, análisis situado en el flujo real de datos, aplicación práctica del principio *Security by Design* y apropiación técnica colectiva de las mitigaciones.

---

### 🎥 Exposición y Sustentación en Video
* **Archivo de referencia:** [`Link al video.txt`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%204/Link%20al%20video.txt)
* **Enlace de YouTube:** [https://youtu.be/55Qrpjdx-IU](https://youtu.be/55Qrpjdx-IU)
* **Resumen:** Video explicativo donde el equipo expone la dinámica de Risk Storming, la matriz de riesgos de la Fintech Mobile, la demostración de mitigación CI/CD y las conclusiones de gobernanza ágil.

---

## 🎯 Conclusión
El **Producto IV** consolida la integración entre la **Arquitectura de Software, la Ciberseguridad y las Metodologías Ágiles**. Demuestra que la gestión de riesgos no es un evento burocrático aislado, sino una práctica técnica continua (*DevSecOps*) que protege la viabilidad del negocio al transformar activamente la incertidumbre en elementos ejecutables del Backlog.
