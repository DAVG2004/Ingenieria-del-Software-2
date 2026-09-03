# Ejercicio 2: Análisis de las 4 Dimensiones de Pressman y Errores Clásicos
**Caso de Estudio:** Startup de Delivery  
**Autor:** Andrés Gómez (V-31.085.717)  
**Asignatura:** Ingeniería de Software II  
**Institución:** Universidad Nacional Experimental de Guayana (UNEG)  
**Docente:** Mg. Félix Márquez  

---

## 📌 Contexto del Escenario
Una *startup* de *delivery* se encuentra en fase de desarrollo. El director técnico impone de forma unánime una arquitectura distribuida de microservicios sobre **Kubernetes** (*Tecnología*), a pesar de que el equipo de desarrollo solo domina programación en **PHP monolítico** (*Personas*). En paralelo, el proyecto carece de un proceso formal de gestión de cambios (*Proceso*) y se acepta la inclusión de una pasarela de "pagos con criptomonedas" a mitad de desarrollo sin ajustar la planificación ni el presupuesto (*Producto/Alcance*).

---

## 🔍 Análisis y Diagnóstico

### 1. Desbalance en las 4 Dimensiones de Pressman (2014)
* **Tecnología vs. Personas:** Sobreingeniería severa. Forzar una infraestructura compleja como Kubernetes sobre un equipo capacitado únicamente en PHP monolítico genera brecha cognitiva, sobrecarga mental y parálisis técnica.
* **Proceso:** Ausencia de gobernanza y disciplina metodológica. Inexistencia de un flujo estandarizado para la evaluación e impacto de solicitudes de cambio.
* **Producto / Alcance:** Corrupción de la línea base por alteración de requerimientos no planificados que desestabilizan el *Minimum Viable Product* (MVP).

### 2. Errores Clásicos Identificados
* **Corrupción del Alcance (*Scope Creep*):** Adición continua de funcionalidades (criptomonedas) sin modificar costo, tiempo ni recursos.
* **El Síndrome de la "Bala de Plata" (*Silver Bullet*):** Asumir falsamente que adoptar la tecnología de moda (Kubernetes) resolverá las deficiencias organizacionales del equipo.
* **Optimismo Injustificado & Ley de Hofstadter:** Subestimar la curva de aprendizaje de arquitecturas distribuidas en equipos sin experiencia previa.
* **Desconexión con el Usuario Final:** Ausencia de repartidores y comercios afiliados en las etapas de descubrimiento de requerimientos.

---

## 🛠️ Plan de Mitigación como Líder Servicial (PMBOK 7 / Ágil)

Como **Líder Servicial** (Greenleaf, 1977), el rol directivo debe enfocarse en remover impedimentos, proteger al equipo y reorientar el desarrollo hacia la entrega de valor real:

1. **Reorganización Arquitectónica:** Migrar inmediatamente hacia un **Monolito Modular en PHP** (e.g., Laravel) empaquetado en contenedores Docker básicos. Esto aprovecha las competencias actuales del equipo y reduce el tiempo de salida al mercado (*Time-to-Market*).
2. **Gobernanza del Product Backlog:** Negociar con los *stakeholders* la postergación de la pasarela de criptomonedas hacia la versión 2.0, priorizando métodos de pago tradicionales comprobados para validar el modelo de negocio en el MVP.
3. **Control de Procesos Liviano:** Implementar un tablero Kanban con límites de Trabajo en Progreso (WIP) y reglas transparentes para canalizar cambios futuros.
4. **Validación Centrada en el Usuario:** Diseñar sesiones de *Design Thinking* con usuarios reales (repartidores y dueños de locales) para afinar los flujos operativos esenciales.
