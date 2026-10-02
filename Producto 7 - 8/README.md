# Producto VII y VIII: Monitoreo, Calidad, Cierre del Proyecto y Transición Operacional

**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Coordinación:** Ingeniería en Informática  
**Docente:** Mg. Félix Márquez (fmarquez@e.uneg.edu.ve)  
**Período:** 2026  

---

## 👥 Equipo de Trabajo / Autores

| Nombre y Apellido | Cédula | Rol / Responsabilidad |
| :--- | :--- | :--- |
| 👑 **Alexmary Ramírez** | V-31.809.930 | **Líder de Equipo** / Gestión de Métricas (EVM vs. Flujo/DORA) y Calidad Operativa |
| 💻 **Andrés Gómez** | V-31.085.717 | Desarrollador / Lead Time for Changes y Automatización de Pipelines |
| 💻 **Daniel Vallenilla** | V-31.159.105 | Desarrollador / Change Failure Rate, Control de WIP y Ley de Little |
| 💻 **José Silva** | V-30.810.283 | Desarrollador / Transición a Operaciones, SRE (SLOs/Error Budgets) y PIR |

---

## 📌 Descripción General del Producto VII y VIII

Este entregable conjunto consolida las **Unidades 7 y 8** de la asignatura, abordando la evolución crítica desde el seguimiento reactivo y burocrático de proyectos tradicionales hacia una cultura moderna de **Monitoreo Continuo, Calidad Integral, Cierre Formal y Sostenibilidad Operacional** bajo los paradigmas Ágiles, DevOps y SRE (*Site Reliability Engineering*).

Se analizan dos problemáticas fundamentales en el ciclo de vida del software:
1. **La paradoja de las métricas tradicionales de gestión (EVM):** Por qué proyectos con indicadores favorables de cronograma y costo pueden fracasar en la entrega real de valor, y cómo las métricas de **Flujo** y los indicadores clave **DORA** (*DevOps Research and Assessment*) permiten diagnosticar la eficiencia y estabilidad del sistema.
2. **La transición de Proyecto a Producto:** Por qué el enfoque clásico de "entrega y abandono" (*throw over the wall*) destruye el valor del negocio e introduce deuda técnica, y cuáles son las acciones estructuradas (SLOs, *Error Budgets*, período de *Hypercare* y revisiones PIR) para garantizar la continuidad operativa y la preservación del conocimiento organizacional.

---

## 📚 Documentos y Artefactos Desarrollados

* **Documento principal en PDF:** [`Producto VII - Monitoreo, Calidad y Cierre del Proyecto.pdf`](file:///C:/Users/alexm/.gemini/antigravity-ide/scratch/Ingenieria-del-Software-2/Producto%207%20-%208/Producto%20VII%20-%20Monitoreo,%20Calidad%20y%20Cierre%20del%20Proyecto.pdf)
* **Título formal del informe:** *"Monitoreo, Calidad y Cierre del Proyecto: De la Medición a la Mejora Continua Operativa"*

---

## 🔍 Resumen y Análisis de los Casos de Estudio

### 📊 Pregunta 1: La Paradoja de EVM frente a las Métricas de Flujo y DORA

* **Caso de Estudio:** Un proyecto de software reporta indicadores de Gestión del Valor Ganado (*Earned Value Management* - EVM) aparentemente excelentes:
  * **CPI = 1.05** (Índice de Desempeño del Costo: por debajo del presupuesto planificado).
  * **SPI = 1.02** (Índice de Desempeño del Cronograma: adelantado a la línea base programada).
  Sin embargo, los usuarios y el área de negocio manifiestan insatisfacción persistente: las funcionalidades esperadas no llegan a tiempo a producción, se presentan fallas recurrentes y la percepción de valor es sumamente deficiente.

* **Diagnóstico de los Factores Sistémicos:**
  1. **Desconexión entre "Desarrollo Terminado" y "Valor Entregado" (Falta de Visión End-to-End):**  
     El equipo marca tareas internas como completadas para inflar artificialmente el SPI en el cronograma, pero estas funcionalidades quedan represadas en etapas posteriores (pruebas manuales, aprobaciones burocráticas o ventanas de despliegue tardías). Para el negocio, una línea de código no desplegada en producción representa costo e inventario estancado, no valor.
  2. **Acumulación de Trabajo en Progreso (WIP) y Cuellos de Botella:**  
     Un SPI favorable puede enmascarar un volumen excesivo de trabajo iniciado y no terminado (*Work in Progress*). Según la **Ley de Little** ($\text{Lead Time} = \frac{\text{WIP}}{\text{Throughput}}$), elevar el WIP incrementa linealmente el tiempo de entrega (*Lead Time*), dilatando la llegada de valor al usuario.
  3. **Inexistencia de Puertas de Calidad Automatizadas (*Quality Gates*):**  
     Las métricas tradicionales no auditan la salud técnica ni la estabilidad en producción. Sin pipelines de CI/CD automatizados, los despliegues manuales propensos a error generan constantes incidentes y retrabajo (*rework*), erosionando la confianza del cliente.

* **Métricas Implementadas para Diagnosticar y Resolver la Situación:**
  * **A. Lead Time for Changes (Tiempo de Entrega de Cambios - Métrica DORA / Flujo):**  
    Mide el tiempo desde que el código es comprometido (*commit*) hasta que corre exitosamente en producción. Permite identificar cuellos de botella exactos en pruebas o despliegue para reemplazarlos con automatización y entrega continua.
  * **B. Change Failure Rate (Tasa de Fallos en Cambios - Métrica DORA):**  
    Mide el porcentaje de despliegues que causan incidentes críticos, degradación del servicio o requieren *hotfixes* / *rollbacks*. Obliga a establecer criterios estrictos de *Definition of Done* (DoD), pruebas automáticas y análisis estático antes de cada pase a producción.
  * **C. Work in Progress (WIP - Métrica de Flujo):**  
    Controla el número de ítems en progreso simultáneo. Al establecer límites estrictos de WIP en tableros Kanban, el equipo se enfoca en *"dejar de empezar y comenzar a terminar"*, reduciendo el *Cycle Time* y estabilizando el flujo de valor.

---

### 🚀 Pregunta 2: Transición de Proyecto a Producto y Sostenibilidad Operacional

* **Caso de Estudio:** Un proyecto de infraestructura tecnológica finaliza su fase de ejecución y la gerencia aplica el modelo tradicional de *"entrega y abandono"* (*throw over the wall*): se transfiere un manual básico en PDF, se da por cerrado administrativamente el contrato y el equipo de desarrollo se disuelve inmediatamente.

* **Justificación de los Riesgos Críticos:**
  1. **Transferencia descontrolada de Deuda Técnica:**  
     Entregar únicamente documentación estática sin transferencia contextual traslada problemas arquitectónicos y fallas no resueltas directamente al equipo de soporte, colapsando su capacidad de respuesta.
  2. **Deterioro del Valor Comercial y Degradación de SLAs:**  
     Un personal operativo sin capacitación profunda es incapaz de diagnosticar fallos complejos a tiempo, provocando caídas prolongadas de servicio y el incumplimiento de los Acuerdos de Nivel de Servicio (*SLA*).
  3. **Fuga del Conocimiento Tácito y Pérdida de APAO:**  
     Al disolver al equipo sin retrospectivas ni actualización de los Activos de los Procesos de la Organización (APAO), las lecciones aprendidas y mejores prácticas se pierden, forzando a la organización a repetir los mismos fallos en futuros proyectos.

* **Tres Acciones Específicas para una Transición Efectiva (ITIL 4 / SRE):**
  1. **Definir Objetivos de Nivel de Servicio (SLO) y Presupuestos de Error (*Error Budgets*) con SRE/Operaciones:**  
     Establecer límites claros y consensuados de confiabilidad. Si los incidentes operativos consumen el *Error Budget*, se detienen las nuevas entregas y el equipo técnico se enfoca prioritariamente en la estabilidad y resiliencia del sistema.
  2. **Ejecutar un Plan de Capacitación y Período de Acompañamiento Híbrido (*Hypercare*):**  
     Implementar una fase transitoria donde desarrolladores clave colaboran en conjunto con soporte (*Shadowing* y *Reverse Shadowing*) para atender incidencias reales en caliente, garantizando la asimilación práctica de los sistemas de monitoreo y despliegue.
  3. **Realizar una Revisión Post-Implementación (PIR) y Actualización de APAO:**  
     Efectuar una sesión formal de cierre para evaluar si se cumplieron los beneficios de negocio esperados y documentar lecciones aprendidas, alimentando a la PMO con patrones de diseño, plantillas y procedimientos operativos estandarizados.

---

## 🎯 Conclusión

El entregable de los **Productos VII y VIII** demuestra que el éxito de la ingeniería de software moderna no concluye con la finalización de tareas en un cronograma o el cierre contable de un proyecto. Requiere sustituir métricas cosméticas por indicadores de flujo y estabilidad técnica (DORA), integrando una transición responsable y sostenible hacia operaciones que asegure la continuidad del servicio, la madurez del equipo y la preservación del valor organizacional.
