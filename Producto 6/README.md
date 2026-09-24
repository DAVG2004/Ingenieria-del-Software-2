# Producto VI: Liderazgo, Equipos y Cultura de Ingeniería

**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad |
| :--- | :--- | :--- |
| 👑 **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** / Liderazgo de Servicio y Seguridad Psicológica |
| 💻 **Andrés Gómez** | V-31.085.717 | Desarrollador / Team Topologies y Maniobra Inversa de Conway |
| 💻 **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Reestructuración de Procesos y Code Reviews |
| 💻 **José Silva** | V-30.810.283 | Desarrollador / Comunicación Asertiva y Dinámicas de Retrospectiva |

---

## 📌 Descripción General del Producto VI

El **Producto VI** se enfoca en la dimensión sociotécnica fundamental de la ingeniería de software: el impacto directo que las **estructuras organizacionales**, los **estilos de liderazgo** y la **cultura de los equipos** tienen sobre la arquitectura del software y la capacidad de entrega de valor continuo.

Se analiza la **Ley de Conway** y la aplicación estratégica de la **Maniobra Inversa de Conway (*Inverse Conway Maneuver*)** mediante el marco de **Team Topologies** (Matthew Skelton y Manuel Pais), así como el rol decisivo de la **Seguridad Psicológica** (Amy Edmondson), el **Liderazgo de Servicio** (*Servant Leadership*) y la **Comunicación No Violenta (CNV)** en la resolución de conflictos técnicos y la revisión empática de código.

---

## 📚 Documentos, Ejercicios y Análisis Desarrollados

A continuación se detallan las temáticas y soluciones desarrolladas en este entregable:

---

### 🏛️ Pregunta 1: La Maniobra Inversa de Conway y Team Topologies
* **Archivo principal:** [`Producto VI_ Liderazgo, Equipos y Cultura de Ingeniería.pdf`](file:///C:/Users/alexm/.gemini/antigravity-ide/scratch/Ingenieria-del-Software-2/Producto%206/Producto%20VI_%20Liderazgo,%20Equipos%20y%20Cultura%20de%20Ingenier%C3%ADa.pdf)
* **Caso de Estudio:** Entidad bancaria tradicional con arquitectura monolítica y departamentos funcionales en silos (*Departamento de Base de Datos*, *Departamento de Backend Java* y *Departamento de UI*), donde el lanzamiento de nuevas funciones como "Créditos" sufre retrasos de meses y fricción continua bajo un Gerente de Proyecto tradicional.
* **Diagnóstico bajo la Ley de Conway:**
  * La Ley de Conway postula que las arquitecturas de software replican las estructuras de comunicación de la organización.
  * Los silos funcionales garantizan un monolito acoplado con dependencias cruzadas inmanejables, alta sobrecarga cognitiva y transferencia de culpas entre áreas (*hand-offs* lentos), anulando cualquier iniciativa ágil superficial.
* **Rediseño Organizacional con Team Topologies:**
  1. **Stream-aligned Teams (Equipos Alineados al Flujo):** Células multidisciplinarias autónomas (PO, Frontend, Backend, QA) dedicadas de principio a fin a un dominio de negocio específico (ej. Célula de Créditos Personales, Célula de Cuentas).
  2. **Platform Teams (Equipos de Plataforma):** Proveen infraestructura, gobernanza de datos y APIs internas como un autoservicio (*Self-Service API*), liberando a los equipos de flujo de la carga cognitiva de bajo nivel.
  3. **Enabling Teams (Equipos Habilitadores):** Especialistas técnicos que asesoran, transfieren conocimientos y facilitan la adopción de nuevas tecnologías (ej. patrones de microservicios, eventos con Kafka) sin convertirse en cuellos de botella.
  4. **Complicated-subsystem Teams (Subsistemas Complejos):** Célula altamente especializada encargada del motor matemático de scoring de crédito y algoritmos de riesgo financiero.
* **Evolución del Antiguo Gerente de Proyecto:**
  * Transición de la figura de control y asignación jerárquica de tareas hacia roles de **Product Manager** (focalizado en el *qué* y valor de negocio) y **Delivery Manager / Agile Coach** (focalizado en el *cómo*, desbloqueo de impedimentos, optimización del *flow* y salud del equipo).

---

### 🛡️ Pregunta 2: Liderazgo, Conflicto y Seguridad Psicológica en Ingeniería
* **Caso de Estudio:** Un Arquitecto Principal sénior con excelente capacidad técnica pero actitudes tóxicas y comentarios despectivos en revisiones de Pull Requests (*"¿En serio vas a usar este patrón? Es de principiantes"*), provocando el silenciamiento de los ingenieros junior, desmotivación y caída drástica en la velocidad del equipo.
* **Diagnóstico según Amy Edmondson (Seguridad Psicológica):**
  * La cultura del miedo y el ridículo destruye la seguridad psicológica, impidiendo que el equipo formule preguntas, admita errores tempranos o experimente con innovación.
  * A largo plazo esto deriva en rotación de talento (*burnout*), acumulación silenciosa de fallas no reportadas y deuda técnica crítica.
* **Estrategia de Intervención (Liderazgo de Servicio y Comunicación No Violenta):**
  * **Abordaje Privado con el Arquitecto (CNV):**
    * *Observación objetiva:* *"He notado comentarios como 'es de principiantes' en los últimos PRs"* (sin juzgar su intención).
    * *Impacto en el equipo:* *"Cuando los juniors reciben estos comentarios, sienten desconfianza y dejan de pedir feedback temprano, lo que afecta la velocidad de entrega"*.
    * *Alineación de objetivos:* Reconocer su alto estándar técnico y redirigir su experiencia hacia el rol de mentor generador de líderes.
    * *Petición concreta:* Adoptar retroalimentación objetiva enfocada en el código y no en la persona.
  * **Reestructuración del Proceso de Code Review:**
    * Implementación de herramientas de análisis estático y linters automáticos en el pipeline de CI para que la máquina se encargue del estilo y formato.
    * Definición de una **Guía de Revisión de Código y Etiqueta en PRs** orientada a comentarios constructivos (ej. prefijos sugeridos: `[Pregunta]`, `[Sugerencia]`, `[Nitpick]`, `[Bloqueante]`).
* **Dinámica de Retrospectiva para Reconstruir la Confianza:**
  * **Dinámica "Safety Check" y la Directiva Primaria de Kerth:**
    * Votación anónima de seguridad psicológica (del 1 al 5).
    * Ejercicio *"Aprecio y Desafío"* donde los miembros comparten agradecimientos específicos sobre colaboraciones recientes y proponen acuerdos colectivos de trabajo para un entorno seguro y de soporte mutuo.

---

## 🎯 Conclusión
El **Producto VI** constata que el éxito de los proyectos de software depende tanto del diseño de la estructura humana como de la ingeniería de código. Aplicar la **Maniobra Inversa de Conway** permite estructurar equipos que posibiliten arquitecturas desacopladas y escalables, mientras que el cultivo intencional de la **Seguridad Psicológica** y el **Liderazgo de Servicio** garantiza la sostenibilidad, motivación y excelencia del equipo técnico.
