# Producto I: Fundamentos de la Gestión de Proyectos y Productos de Software
**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad | Ejercicio Asignado |
| :--- | :--- | :--- | :--- |
| **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** | Ejercicio 1: Traducción de Necesidades a Requerimientos y Actores |
| **Andrés Gómez** | V-31.085.717 | Desarrollador / Analista | Ejercicio 2: Análisis de las 4 Dimensiones de Pressman y Errores Clásicos |
| **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Analista | Ejercicio 3: Enfoque PMBOK 6 vs. PMBOK 7 en la Gestión de Requisitos |
| **José Silva** | V-30.810.283 | Desarrollador / Analista | Ejercicio 4: Discusión Crítica: La Crisis del Software y Adopción de Usuarios |

---

## 📌 Descripción del Proyecto
Este repositorio reúne el trabajo analítico, reflexivo y de investigación correspondiente al **Producto I** de la asignatura **Ingeniería de Software II**. Se abordan los cimientos conceptuales y prácticos para la gestión moderna de proyectos y productos de software, evaluando la transición histórica desde la "Crisis del Software" hacia paradigmas ágiles, DevOps y la gestión orientada al valor (*Project-to-Product shift*).

El trabajo está estructurado en **4 ejercicios prácticos de aplicación** y una **sección adicional (BONUS)** basada en los estándares internacionales **PMBOK 7 (2021)**, **SWEBOK V4**, **ISO/IEC/IEEE 29148**, **ISO/IEC 20926**, **ISO 31000** y el **Manifiesto Ágil**.

---

## 📝 Resumen Detallado de los Ejercicios

### 🏥 Ejercicio 1: Traducción de Necesidades a Requerimientos y Actores
* **Autor:** Alexmary Ramírez (Líder)
* **Contexto:** Un hospital público requiere reducir el tiempo de espera de los pacientes en la sección de urgencias.
* **Resumen de Solución:**
  * **Identificación de Actores:** Pacientes de Urgencias, Médicos de Triaje, Personal Administrativo/Admisión y Director Médico del Hospital.
  * **Traducción Necesidad ➔ Requerimiento (ISO/IEC/IEEE 29148):**
    * *Paciente:* Necesidad de conocer su tiempo estimado de atención ➔ **RF:** El sistema debe notificar en tiempo real el turno y estimado de espera vía SMS/Pantalla.
    * *Médico de Triaje:* Necesidad de clasificar rápidamente la gravedad ➔ **RF:** El sistema debe incluir un formulario estandarizado de clasificación Manchester accesible en < 3 clics.
    * *Personal Administrativo:* Necesidad de agilizar el registro inicial ➔ **RF:** El sistema debe permitir la lectura automatizada de documentos de identidad.
    * *Director Médico:* Necesidad de supervisar el rendimiento del área ➔ **RNF (Calidad/Rendimiento):** El sistema debe generar reportes de métricas (KPIs) en tiempo real con un tiempo de respuesta menor a 2 segundos.
  * **Reflexión Tecnológica:** El uso de prototipos interactivos (Figma) e Inteligencia Artificial Generativa permite validar flujos de interfaz con el personal médico antes de codificar, reduciendo el costo del cambio según la curva de Boehm.

---

### 🛵 Ejercicio 2: Análisis de las 4 Dimensiones de Pressman y Errores Clásicos
* **Autor:** Andrés Gómez
* **Contexto:** Startup de *delivery* con decisiones impuestas de arquitectura compleja (Kubernetes) en un equipo sin experiencia previa (solo PHP monolítico), sin gestión de cambios y adición de pagos con criptomonedas a mitad de desarrollo.
* **Resumen de Solución:**
  * **Desbalance de las 4 Dimensiones (Pressman):**
    * *Tecnología vs. Personas:* Sobreingeniería (Kubernetes) que excede la capacidad técnica actual del equipo (PHP monolítico).
    * *Proceso:* Ausencia de gobernanza y control de cambios.
    * *Producto/Alcance:* Alteración de la línea base del MVP sin ajuste de costo ni tiempo.
  * **Errores Clásicos Identificados:** Corrupción del Alcance (*Scope Creep*), Síndrome de la "Bala de Plata" (*Silver Bullet*) y Optimismo Injustificado (Ley de Hofstadter).
  * **Plan de Mitigación (Líder Servicial):** Pivotar inmediatamente hacia un **Monolito Modular en PHP (Laravel)** empaquetado en Docker, aplazar la pasarela de criptomonedas para la v2.0 y establecer un tablero Kanban con límites de WIP para el control de cambios.

---

### 🔄 Ejercicio 3: Enfoque PMBOK 6 (Procesos) vs. PMBOK 7 (Principios)
* **Autor:** Daniel Vallenilla
* **Contexto:** Cambio de paradigma en la dirección de proyectos y su impacto directo en la ingeniería de requisitos.
* **Resumen de Solución:**
  * **Comparativa Estructural:** PMBOK 6 se basa en 10 Áreas de Conocimiento y 49 Procesos prescriptivos (*Outputs*), mientras que PMBOK 7 se fundamenta en 12 Principios y 8 Dominios de Desempeño orientados a la entrega de valor (*Outcomes*).
  * **Ejemplo 1 (Gestión de Requisitos en Entornos Volátiles):** Bajo PMBOK 6, un cambio en los requisitos exige atravesar el proceso formal de Control Integrado de Cambios (solicitud, comité, actualización de plan). Bajo PMBOK 7, se aplica el principio de *Adaptabilidad y Resiliencia*, redefinición del Product Backlog e iteraciones cortas.
  * **Ejemplo 2 (Involucramiento de Stakeholders):** PMBOK 6 lo gestiona como una secuencia de identificación y planificación de participación. PMBOK 7 lo aborda como un principio continuo de colaboración y descubrimiento activo de valor junto al cliente.

---

### 💻 Ejercicio 4: Discusión Crítica: Construir el Software Correcto
* **Autor:** José Silva
* **Contexto:** *"En la ingeniería de software moderna, el mayor riesgo no es que el código no compile, sino que el software se construya perfectamente pero nadie lo use"*.
* **Resumen de Solución:**
  * **Conexión con la Crisis del Software:** Históricamente la crisis se centró en fallas técnicas o presupuestarias. Hoy la crisis mutó hacia la *Complejidad Esencial* y la falta de adopción real del producto.
  * **Importancia de la Ingeniería de Requisitos:** Un sistema que cumple todos los atributos de calidad de código pero no resuelve un problema de negocio es un fracaso financiero. La elicitación continua evita el "síndrome de la fábrica de funcionalidades" (*Feature Factory*).
  * **Gestión Holística de Actores:** Es crucial identificar no solo a quienes usarán el sistema, sino a los actores que resisten el cambio operativo. La validación temprana con *User Journeys* garantiza que el software aporte utilidad económica y social real (*Outcome*).

---

## 🎁 Entrega Adicional (BONUS)

* **Tema:** Comparativa de Actualizaciones PMBOK 7 (2021) vs. PMBOK 8 (2026) y Ensayo Crítico Individual.
* **Documento:** [Ver Ensayo y Comparativa Bonus](./PRODUCTO%20I/Entrega_Bonus_PMBOK8.md)
* **Resumen:** Análisis enfocado en la transición final hacia la gestión continua de productos (*Project-to-Product shift*), la incorporación de telemetría, IA para la gestión de backlogs y el impacto de la hiperadaptación en la ingeniería de software contemporánea.
