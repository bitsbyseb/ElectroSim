# ⚡ Simulador Interactivo de Campos Eléctricos

Una aplicación web educativa que transforma conceptos abstractos de electromagnetismo en experiencias visuales interactivas. Experimenta con cargas eléctricas, visualiza líneas de campo en tiempo real y explora cómo las cargas puntuales crean paisajes de fuerza eléctrica.

## ✨ ¿Qué hace especial a este simulador?

Este no es solo otro visualizador de física. Implementa algoritmos numéricos de alta precisión (Runge-Kutta de 4º orden) para trazar líneas de campo eléctrico con exactitud matemática, mientras mantiene una interfaz tan intuitiva que puedes explorar conceptos complejos con simples clics y arrastres.

**Características destacadas:**

- 🎯 **Sensor de Campo Eléctrico en Tiempo Real**: Arrastra el sensor naranja por el canvas y observa cómo la flecha cambia de dirección e intensidad, mostrándote exactamente la fuerza que experimentaría una carga de prueba en ese punto
- 🌊 **Líneas de Campo Dinámicas**: Cada línea se calcula matemáticamente siguiendo la dirección del campo, emergiendo de cargas positivas y convergiendo hacia las negativas
- 🎨 **Visualización de Equipotenciales**: Superficies donde el potencial eléctrico permanece constante, perpendiculares a las líneas de campo
- ⚙️ **Motor de Física Preciso**: Implementación fiel de la Ley de Coulomb con principio de superposición para configuraciones multi-carga
- 🖱️ **Interacción Directa**: Crea, mueve y elimina cargas sin menús complicados

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js** (v14 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **yarn** (incluido con Node.js)
- Un navegador moderno (Chrome, Firefox, Safari, Edge)

### Instalación Paso a Paso

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/electric-field-simulator.git
cd electric-field-simulator
```

#### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- TypeScript y sus dependencias
- Herramientas de desarrollo necesarias
- Type definitions si las hay

#### 3. Compilar TypeScript

```bash
# Compilación única
npx tsc

# O en modo watch (recompila automáticamente al guardar cambios)
npx tsc --watch
```

El compilador TypeScript generará los archivos JavaScript en la carpeta especificada en `tsconfig.json`.

#### 4. Servir la Aplicación Localmente

**Opción A - Usar un servidor HTTP simple:**

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (instalar primero: npm install -g http-server)
http-server -p 8000
```

**Opción B - Usar Live Server (recomendado para desarrollo):**

```bash
# Instalar Live Server globalmente
npm install -g live-server

# Iniciar servidor con recarga automática
live-server --port=8000
```

**Opción C - Extensión de VS Code:**

Si usas Visual Studio Code, instala la extensión "Live Server" y haz clic derecho en `index.html` → "Open with Live Server"

#### 5. Abrir en el Navegador

Navega a `http://localhost:8000` en tu navegador favorito.

### Configuración del Proyecto TypeScript

El proyecto utiliza un archivo `tsconfig.json` para configurar el compilador. Configuración típica:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Solución de Problemas Comunes

**Error: "Cannot find module 'typescript'"**
```bash
npm install --save-dev typescript
```

**Error: CORS al cargar módulos ES6**
- Asegúrate de estar usando un servidor HTTP local, no abriendo el archivo directamente con `file://`

**Las líneas de campo no se dibujan correctamente**
- Verifica que el canvas tenga dimensiones apropiadas en el CSS
- Revisa la consola del navegador para errores de JavaScript

## 🎮 Guía de Uso

### Controles Interactivos

| Acción | Cómo hacerlo |
|--------|--------------|
| **Crear carga positiva** | Clic izquierdo en el canvas |
| **Crear carga negativa** | Clic derecho en el canvas |
| **Mover una carga** | Arrastra la carga existente |
| **Eliminar carga** | Doble clic sobre la carga |
| **Usar sensor de campo** | Arrastra el círculo naranja por el canvas |
| **Ajustar parámetros** | Usa los controles deslizantes en el panel lateral |

### Panel de Controles

- **Densidad de Líneas**: Define cuántas líneas emergen de cada carga (más líneas = visualización más densa pero más carga computacional)
- **Paso RK4**: Controla la precisión del trazado (valores menores = mayor precisión pero más lento)
- **Longitud Máxima**: Limita hasta dónde se extienden las líneas de campo
- **Toggle Equipotenciales**: Activa/desactiva la visualización de líneas de potencial constante
- **Limpiar Canvas**: Elimina todas las cargas y reinicia la simulación

### Experimentos Sugeridos

1. **Dipolo Eléctrico**: Coloca una carga positiva y una negativa cercanas. Observa cómo las líneas conectan ambas cargas.

2. **Campo Uniforme**: Crea dos filas de cargas (positivas arriba, negativas abajo) para aproximar un campo uniforme en el centro.

3. **Jaula de Faraday**: Rodea una carga central con un anillo de cargas del signo opuesto.

4. **Exploración con Sensor**: Mueve el sensor naranja alrededor de diferentes configuraciones y observa cómo cambia la magnitud (longitud de flecha) y dirección.

## 🔬 Fundamentos Físicos

### Ley de Coulomb

El campo eléctrico **E** generado por una carga puntual q a una distancia r es:

**E = k · q / r²**

Donde k = 8.99 × 10⁹ N·m²/C² (constante de Coulomb). El campo apunta radialmente hacia afuera para cargas positivas y hacia adentro para negativas.

### Principio de Superposición

Cuando hay múltiples cargas, el campo eléctrico total en cualquier punto es la suma vectorial de los campos individuales:

**E_total = E₁ + E₂ + E₃ + ... + Eₙ**

Esta suma vectorial es lo que permite configuraciones complejas y fascinantes.

### Algoritmo Runge-Kutta de 4º Orden (RK4)

Las líneas de campo no son rectas al azar: siguen matemáticamente la dirección del campo eléctrico en cada punto. El algoritmo RK4 nos permite trazar estas curvas con alta precisión:

1. Desde un punto inicial, calculamos el campo eléctrico
2. Damos un pequeño paso en esa dirección
3. Recalculamos el campo en la nueva posición
4. Repetimos hasta que la línea alcance otra carga o el borde del canvas

Este método es el mismo que usan los científicos para resolver ecuaciones diferenciales complejas.

## 🎨 Detalles Visuales

### Esquema de Colores

- **Cargas Positivas**: Rojas (#FF4444) - Las líneas de campo emergen de ellas
- **Cargas Negativas**: Azules (#4444FF) - Las líneas de campo convergen hacia ellas
- **Líneas de Campo**: Gradiente según intensidad (azul frío → amarillo → rojo caliente)
- **Sensor**: Naranja (#FFA500) - Contrasta con todo para fácil identificación
- **Equipotenciales**: Verde translúcido - Perpendiculares a las líneas de campo

### Sensor de Campo Eléctrico

El sensor es más que un indicador visual: es una herramienta de medición precisa. La flecha naranja que emerge del círculo tiene:

- **Dirección**: Hacia donde apunta el campo eléctrico vectorial
- **Longitud**: Proporcional a la magnitud del campo (máximo 150 píxeles)
- **Color**: Naranja vibrante para contraste óptimo

Puedes arrastrar el sensor a cualquier posición para "sentir" el campo eléctrico como lo haría una carga de prueba.

## 🏗️ Arquitectura del Código

### Clases Principales

**`Charge`**
Representa una carga eléctrica puntual con propiedades como posición (x, y), magnitud de carga, y métodos para calcular el campo eléctrico que produce.

**`FieldLines`**
Motor de renderizado que implementa el algoritmo RK4 para trazar líneas de campo. Gestiona el cálculo del campo eléctrico total usando el principio de superposición.

**`ElectricFieldSensor`**
Herramienta interactiva que extiende la funcionalidad de líneas de campo. Incluye:
- Radio de 10 píxeles para el círculo del sensor
- Propiedad `dragging` para gestionar la interacción de arrastre
- `maxArrowLength = 150` para normalizar la visualización
- `arrowColor = "orange"` para consistencia visual

### Flujo de Datos

```
Interacción del Usuario (click/drag)
    ↓
Actualización del Estado (añadir/mover cargas o sensor)
    ↓
Cálculo del Campo (superposición de todas las cargas)
    ↓
Algoritmo RK4 (trazar líneas de campo)
    ↓
Renderizado en Canvas (dibujar todo)
```

## 📚 Aplicaciones Educativas

### Para Estudiantes

- Visualiza conceptos abstractos de electromagnetismo
- Experimenta con diferentes configuraciones de cargas
- Desarrolla intuición sobre campos vectoriales
- Prepárate para problemas de física con ejemplos interactivos

### Para Profesores

- Herramienta de demostración en clase
- Complemento para clases de física de bachillerato y universidad
- Permite a los estudiantes explorar por su cuenta
- Base para discusiones sobre campos conservativos y potencial eléctrico

### Temas Cubiertos

- Ley de Coulomb y campo eléctrico
- Principio de superposición
- Dipolos eléctricos
- Campos conservativos
- Potencial eléctrico y superficies equipotenciales
- Métodos numéricos (RK4) para resolver EDOs

## 🤝 Contribuir

Las contribuciones son bienvenidas y apreciadas. Algunas ideas para mejorar el proyecto:

- [ ] Modo de simulación 3D
- [ ] Exportar configuraciones de cargas
- [ ] Animaciones de partículas cargadas moviéndose en el campo
- [ ] Cálculo y visualización de energía potencial
- [ ] Modo oscuro para la interfaz
- [ ] Controles táctiles optimizados para tablets

**Proceso de contribución:**
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Inspirado en simuladores de física educativa como PhET
- Implementación matemática basada en textos de electromagnetismo clásico
- Agradecimiento especial a la comunidad de educadores de física

---

**Desarrollado con ⚡ y 💙 para hacer la física más accesible y fascinante**

*¿Preguntas o sugerencias? Abre un issue en GitHub o contáctame directamente.*
