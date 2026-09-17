# Producto III: Estimación de Software, Métricas Empíricas y Gestión Cuantitativa de la Incertidumbre

**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad |
| :--- | :--- | :--- |
| 👑 **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** / Análisis de Estimación y Gobernanza |
| 💻 **Andrés Gómez** | V-31.085.717 | Desarrollador / Analista de Métricas de Flujo y Simulación |
| 💻 **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Analista de Arquitectura y Deuda Técnica |
| 💻 **José Silva** | V-30.810.283 | Desarrollador / Analista de Minería Git y Madurez Sociotécnica |

---

## 📌 Descripción General del Producto III

El **Producto III** aborda de manera crítica e integral los desafíos fundamentales de la **estimación en la ingeniería de software**, el modelado empírico de incertidumbre y la gobernanza cuantitativa en el ciclo de vida del desarrollo.

Se analiza la transición desde paradigmas tradicionalistas-deterministas (como las estimaciones de tres puntos PERT y la falsa linealidad de esfuerzo-tiempo) hacia marcos modernos basados en **métricas de flujo (*Throughput*, *Cycle Time*)**, **simulaciones estocásticas de Monte Carlo**, **gestión financiera de Deuda Técnica**, **análisis forense de repositorios Git** y **cronogramas operativos estructurados en ERP (Odoo)** para el sistema **Visual Salud**.

---

## 📚 Documentos, Ejercicios y Artefactos Incluidos

A continuación se detalla el contenido analítico y práctico desarrollado en este entregable:

---

### 🎲 Ejercicio 1: De la Incertidumbre (PERT) a la Realidad Empírica
* **Archivo principal:** [`Ejercicio 1_ De la Incertidumbre (PERT) a la Realidad Empírica.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Ejercicio%201_%20De%20la%20Incertidumbre%20(PERT)%20a%20la%20Realidad%20Emp%C3%ADrica.pdf)
* **Caso de Estudio:** Dimensionamiento y planificación de un módulo de autenticación biométrica (reconocimiento facial/dactilar, integración con hardware/APIs, restricciones de latencia y estándares de seguridad).
* **Desarrollo y Hallazgos:**
  * **Cálculo PERT:** Aplicando $O = 10$, $M = 20$, $P = 60$ días-persona:
    $$T_e = \frac{O + 4M + P}{6} = \frac{10 + 4(20) + 60}{6} = \frac{150}{6} = 25 \text{ días-persona}$$
  * **Análisis de Sesgo ($T_e = 25$ vs $M = 20$):** Explicación matemática de la **Asimetría Positiva (*Right-Skewed Distribution*)**. En software, el rendimiento optimista está acotado físicamente, mientras que la variabilidad pesimista puede crecer desproporcionadamente. PERT asigna una ponderación de $1/6$ al escenario pesimista para mitigar el sesgo de optimismo.
  * **Giro Ágil con Métricas de Flujo y Monte Carlo:** Estimación en Story Points ($90\text{ SP}$ en backlog) con velocidad empírica ($\mu = 30\text{ SP/Sprint}$, $\sigma = 5\text{ SP}$).
    * *Escenario Optimista ($\mu + 1\sigma = 35\text{ SP}$):* $\sim 3\text{ Sprints}$.
    * *Escenario Promedio ($30\text{ SP}$):* $3\text{ Sprints}$.
    * *Escenario Conservador ($\mu - 2\sigma = 20\text{ SP}$):* $\sim 5\text{ Sprints}$.
  * **Conclusión Metodológica:** Las simulaciones estocásticas de Monte Carlo sustituyen las fechas fijas engañosas por **compromisos basados en probabilidades (85% - 95% de confianza)** entre 4 y 5 Sprints.

---

### ⏳ Ejercicio 2: La Falacia de los Recursos y el Cono de Incertidumbre
* **Archivo principal:** [`Ejercicio 2 - La Falacia de los Recursos y el Cono de Incertidumbre.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Ejercicio%202%20-%20La%20Falacia%20de%20los%20Recursos%20y%20el%20Cono%20de%20Incertidumbre.pdf)
* **Caso de Estudio:** Decisión directiva impulsiva de duplicar el equipo (de 5 a 10 programadores) faltando solo 2 meses para la fecha límite de un proyecto retrasado.
* **Desarrollo y Hallazgos:**
  * **Demostración Matemática:** Colapso de la ecuación simplista $T = E / N$. La fórmula de canales de comunicación interpersonales $C(N) = \frac{N(N-1)}{2}$ muestra:
    * Equipo original ($N = 5$): $C(5) = 10\text{ canales}$.
    * Equipo duplicado ($N = 10$): $C(10) = 45\text{ canales}$.
    * *Resultado:* Un aumento del 100% en personal provoca un incremento del **350% en canales de comunicación ($O(N^2)$)**.
  * **Ley de Brooks:** *"Agregar recursos humanos a un proyecto de software retrasado lo hace más tarde aún"*.
  * **Tres Factores de Sobrecarga Operativa:**
    1. **Sobrecarga de Comunicación:** Pérdida de tiempo productivo en alineación y reuniones de emergencia.
    2. **Costo de Aculturación (*Onboarding*):** Los ingenieros sénior deben pausar su avance para capacitar al personal nuevo.
    3. **Fricción de Integración y Control de Calidad:** Aumento masivo de *merge conflicts*, fallos de regresión y saturación de la tubería de CI/CD.
  * **Alternativas de Gestión Resilientes:**
    * *Enfoque Tradicional (PMBOK):* Poda de Alcance (*Descoping*) táctica y enfoque exclusivo en las tareas de la **Ruta Crítica (CPM)**.
    * *Enfoque Ágil/Híbrido:* Filtrado estricto del **MVP (clasificación MoSCoW)** cancelando ítems *Should/Could* y segregación del equipo en **Células Autónomas (*Two-Pizza Teams*)** desacopladas mediante contratos de APIs.

---

### 🛡️ Ejercicio 4 (Bonus): Gestión Cuantitativa de la Incertidumbre en la Estimación de Software
* **Archivo principal:** [`Ejercicio 4 - Bonus - Gestión de Incertidumbre_organized.pdf`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Ejercicio%204%20-%20Bonus%20-%20Gesti%C3%B3n%20de%20Incertidumbre_organized.pdf)
* **Caso de Estudio:** Marco métrico de liderazgo técnico para la toma de decisiones basada en evidencia cuantitativa.
* **Pilares de Gestión:**
  1. **Métricas de Flujo y Modelado Estocástico:** Abandono de horas-hombre. Medición continua de *Cycle Time* e inventarios activos con simulación de Monte Carlo (5,000–10,000 ejecuciones) para derivar Funciones de Distribución Acumulada (CDF).
  2. **Deuda Técnica como Pasivo Financiero (Cunningham):** La deuda genera interés compuesto en forma de fricción cognitiva y retrasos acumulativos. Medición objetiva mediante inspección estática (SonarQube) y reserva **innegociable del 15% al 20% de la capacidad de cada Sprint** para refactorización y mantenimiento.
  3. **Minería de Repositorios (Git Forensics):** Inspección de *Code Churn* (volatilidad de código) y localización de *Hotspots* cruzados con la Complejidad Ciclomática de McCabe para reestructurar código frágil antes de encarar nuevos requisitos.
  4. **Madurez Sociotécnica:** Mitigación del *Bus Factor* (descentralización del conocimiento mediante *Pair Programming* y *Code Reviews*) y evaluación del parámetro **PMAT (COCOMO II)** a través de la disciplina en el historial de versiones (*Conventional Commits*).

---

### 📊 Planificación Operativa y Diagrama de Gantt (Visual Salud en Odoo)
* **Archivos asociados:**
  * [`Odoo Proyecto Visual Salud.csv`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Odoo%20Proyecto%20Visual%20Salud.csv)
  * [`Diagrama de gantt.png`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Diagrama%20de%20gantt.png)
* **Descripción:** Estructura detallada de tareas (WBS/EDT), estimación de horas y secuencia de dependencias exportada e implementada en el sistema ERP **Odoo** para la plataforma **Visual Salud**.
* **Hitos Principales de Entrega (Milestones):**
  * 🚩 **H-1:** Acta de Constitución Aprobada.
  * 🚩 **H-2:** Línea Base de Requisitos Aprobada (SRS bajo IEEE 830, cumplimiento HIPAA y modelos UML).
  * 🚩 **H-3:** Arquitectura y Diseño Aprobados (Infraestructura AWS, modelado de EHR, Wireframes y Mockups).
  * 🚩 **H-4:** Módulos de Software Desarrollados (APIs REST, integración WebRTC con Twilio, pasarelas de pago Stripe/Pago Móvil, catálogo médico y recetas digitales con firma/QR).
  * 🚩 **H-5:** Certificación de Calidad y UAT Aprobada (Ethical Hacking, pruebas de latencia y UAT con 50 pacientes y 10 médicos piloto).
  * 🚩 **H-6:** Proyecto Culminado en Producción (Despliegue AWS SSL, publicación en tiendas App Store/Google Play y capacitación a Clínica Chilemex).

---

### 🎥 Exposición y Sustentación en Video
* **Archivo de referencia:** [`Link del video.txt`](file:///c:/Users/USER/Documents/GitHub/Ingenieria-del-Software-2/Producto%203/Link%20del%20video.txt)
* **Enlace de YouTube:** [https://www.youtube.com/watch?v=1XfpivX0KAs](https://www.youtube.com/watch?v=1XfpivX0KAs)
* **Resumen:** Video explicativo donde el equipo expone los hallazgos analíticos, la resolución de ejercicios, el análisis de variabilidad y la sustentación del plan de trabajo de Visual Salud.

---

## 🎯 Conclusión
El **Producto III** consolida el viraje desde la planificación determinista ingenua hacia la **gestión cuantitativa y probabilística de proyectos de software**. Se demuestra que la estimación efectiva exige comprender las leyes fundamentales de la complejidad sociotécnica (Brooks, Cono de Incertidumbre, Deuda Técnica) y respaldar las decisiones ejecutivas en datos empíricos de flujo, simulaciones estocásticas y herramientas modernas de gobernanza de software.
