class WelcomeDocs extends HTMLElement {
    static observedAttributes = [];
    constructor() {
        super();
    }

    public connectedCallback() {
        this.append(this.template.content.cloneNode(true));
    }

    public disconnectedCallback() {
        this.remove();
    }

    get template(): HTMLTemplateElement {
        const tpl = document.createElement('template');
        tpl.innerHTML = `<style>
            ${this.styles}
        </style>
        <div class="welcome-container">
    <!-- Hero Section -->
    <div class="hero-section">
        <h1 class="hero-title">⚡ Bienvenido a ElectroSim</h1>
        <p class="hero-subtitle">Simulador Interactivo de Campos Eléctricos</p>
    </div>

    <!-- Intro Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">📚 Sobre el Proyecto</h2>
        <p class="text-content">
            <strong class="text-highlight">ElectroSim</strong> es un simulador educativo desarrollado para facilitar 
            la comprensión de conceptos fundamentales de electromagnetismo a través de 
            visualización interactiva y experimentación en tiempo real.
        </p>
        <p class="text-content">
            Este proyecto está desarrollado completamente para la web, lo que significa que 
            puedes acceder a él desde cualquier dispositivo con un navegador moderno, sin 
            necesidad de instalaciones adicionales.
        </p>
    </div>

    <!-- Team Box -->
    <div class="content-box box-darker">
        <h3 class="section-title">👥 Equipo de Desarrollo</h3>
        <ul class="team-list">
            <li class="team-member">👤 Johan Sebastian Puentes Pulido</li>
            <li class="team-member">👤 Juan Sebastian Caicedo Ruiz</li>
            <li class="team-member">👤 Dylan Alejandro Guzman Gomez</li>
        </ul>
        <p class="text-center italic text-content divider">
            Proyecto Académico Universitario
        </p>
    </div>

    <!-- Audience Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">🎯 ¿Para Quién es Este Simulador?</h2>
        <p class="text-content">
            ElectroSim está diseñado para estudiantes de educación superior en áreas como:
        </p>
        <ul class="features-list">
            <li class="list-item">Ingeniería de Sistemas y Computación</li>
            <li class="list-item">Ingeniería Electrónica</li>
            <li class="list-item">Física y ciencias relacionadas</li>
            <li class="list-item">Cualquier persona interesada en comprender el electromagnetismo</li>
        </ul>
    </div>

    <!-- Concepts Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">💡 Conceptos que Puedes Explorar</h2>
        <div class="concepts-grid">
            <div class="concept-card">
                <strong class="concept-title">Campo Eléctrico</strong>
                <p class="concept-description">Visualiza cómo las cargas generan campos vectoriales en el espacio</p>
            </div>
            <div class="concept-card">
                <strong class="concept-title">Potencial Eléctrico</strong>
                <p class="concept-description">Observa la distribución de energía potencial alrededor de las cargas</p>
            </div>
            <div class="concept-card">
                <strong class="concept-title">Líneas de Campo</strong>
                <p class="concept-description">Representa gráficamente la dirección y sentido del campo eléctrico</p>
            </div>
            <div class="concept-card">
                <strong class="concept-title">Principio de Superposición</strong>
                <p class="concept-description">Experimenta cómo múltiples cargas combinan sus efectos</p>
            </div>
            <div class="concept-card col-span-2">
                <strong class="concept-title">Interacciones y Colisiones</strong>
                <p class="concept-description">Observa el comportamiento dinámico entre partículas cargadas</p>
            </div>
        </div>
    </div>

    <!-- Guide Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">🎮 Cómo Usar el Simulador</h2>
        
        <!-- Add Elements -->
        <div>
            <h3 class="subsection-title">➕ Agregar Elementos</h3>
            <div class="add-elements-grid">
                <div class="element-card">
                    <div class="element-icon">🔴</div>
                    <h4 class="element-title">Protones (+)</h4>
                    <p class="element-description">Haz clic en el botón <strong>"Protón"</strong> en la barra inferior para agregar una carga positiva al centro del lienzo.</p>
                </div>
                <div class="element-card">
                    <div class="element-icon">🔵</div>
                    <h4 class="element-title">Electrones (−)</h4>
                    <p class="element-description">Haz clic en el botón <strong>"Electrón"</strong> para agregar una carga negativa al centro del lienzo.</p>
                </div>
                <div class="element-card">
                    <div class="element-icon">📍</div>
                    <h4 class="element-title">Sensores de Campo</h4>
                    <p class="element-description">Agrega sensores que muestran la dirección del campo eléctrico en puntos específicos del espacio.</p>
                </div>
                <div class="element-card">
                    <div class="element-icon">📊</div>
                    <h4 class="element-title">Sensores de Potencial</h4>
                    <p class="element-description">Coloca sensores para visualizar el valor del potencial eléctrico en diferentes ubicaciones.</p>
                </div>
            </div>
        </div>

        <!-- Manipulate Elements -->
        <div style="margin-top: 2rem;">
            <h3 class="subsection-title">🖱️ Manipular Elementos</h3>
            <ul class="instructions-list">
                <li class="instruction-item">
                    <span class="instruction-bullet">▸</span>
                    <span>
                        <strong class="instruction-label">Mover:</strong> Mantén presionado el <span class="keyboard-key">clic izquierdo</span> 
                        sobre cualquier elemento y arrástralo a la posición deseada.
                    </span>
                </li>
                <li class="instruction-item">
                    <span class="instruction-bullet">▸</span>
                    <span>
                        <strong class="instruction-label">Eliminar:</strong> Coloca el cursor sobre el elemento que deseas eliminar 
                        y presiona la tecla <span class="keyboard-key">X</span>.
                    </span>
                </li>
                <li class="instruction-item">
                    <span class="instruction-bullet">▸</span>
                    <span>
                        <strong class="instruction-label">Resetear:</strong> Usa el botón de <strong class="instruction-label">"Reset"</strong> para limpiar 
                        completamente el escenario y empezar desde cero.
                    </span>
                </li>
            </ul>
        </div>

        <!-- Visualization -->
        <div style="margin-top: 2rem;">
            <h3 class="subsection-title">👁️ Visualización</h3>
            <ul class="instructions-list">
                <li class="instruction-item">
                    <span class="instruction-bullet">▸</span>
                    <span>
                        <strong class="instruction-label">Líneas de Campo:</strong> Activa la visualización de líneas de campo 
                        para ver una representación gráfica completa del campo eléctrico global.
                    </span>
                </li>
                <li class="instruction-item">
                    <span class="instruction-bullet">▸</span>
                    <span>
                        <strong class="instruction-label">Sensores Dinámicos:</strong> Los sensores se actualizan en tiempo real 
                        mostrando flechas que indican la dirección y magnitud del campo.
                    </span>
                </li>
            </ul>
        </div>

        <!-- Documentation Panel -->
        <div style="margin-top: 2rem;">
            <h3 class="subsection-title">📖 Panel de Documentación</h3>
            <p class="text-content">
                Al agregar cualquier elemento al escenario, este panel (ubicado a la derecha) 
                se actualizará automáticamente mostrando información relevante sobre:
            </p>
            <ul class="features-list">
                <li class="list-item">Las ecuaciones matemáticas relacionadas</li>
                <li class="list-item">Explicaciones de los conceptos físicos involucrados</li>
                <li class="list-item">Variables y unidades de medida</li>
                <li class="list-item">Propiedades y comportamiento del elemento</li>
            </ul>
        </div>
    </div>

    <!-- Tips Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">💡 Consejos para Aprovechar al Máximo</h2>
        <div class="tips-container">
            <div class="tip-card">
                <strong class="tip-title">🔬 Experimenta libremente:</strong> 
                <span class="tip-text"> No hay forma de "romper" el simulador. 
                Prueba diferentes configuraciones de cargas y observa los resultados.</span>
            </div>
            <div class="tip-card">
                <strong class="tip-title">🔍 Prueba la simetría:</strong> 
                <span class="tip-text"> Coloca cargas en patrones simétricos 
                (línea, círculo, cuadrado) y observa las líneas de campo resultantes.</span>
            </div>
            <div class="tip-card">
                <strong class="tip-title">⚖️ Cargas opuestas:</strong> 
                <span class="tip-text"> Experimenta con pares de cargas de signos 
                opuestos y observa cómo interactúan sus campos (configuración dipolar).</span>
            </div>
            <div class="tip-card">
                <strong class="tip-title">🎯 Usa sensores estratégicamente:</strong> 
                <span class="tip-text"> Coloca sensores en puntos 
                clave para comparar la intensidad del campo en diferentes ubicaciones.</span>
            </div>
            <div class="tip-card">
                <strong class="tip-title">📚 Lee la documentación:</strong> 
                <span class="tip-text"> Cada vez que agregues un elemento, 
                revisa el panel de documentación para profundizar en la teoría.</span>
            </div>
        </div>
    </div>

    <!-- Tech Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">🛠️ Tecnologías Utilizadas</h2>
        <p class="text-content">
            ElectroSim está construido con tecnologías web modernas:
        </p>
        <div class="tech-tags">
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag">P5.js</span>
            <span class="tech-tag">Canvas API</span>
            <span class="tech-tag">WebGL</span>
            <span class="tech-tag">TailwindCSS</span>
        </div>
        <p class="text-content text-sm italic">
            Esto garantiza un rendimiento óptimo y compatibilidad con navegadores modernos, 
            permitiendo simulaciones fluidas y visualizaciones de alta calidad.
        </p>
    </div>

    <!-- Future Box -->
    <div class="content-box box-dark">
        <h2 class="section-title">🚀 Próximas Funcionalidades</h2>
        <p class="text-content">
            Estamos trabajando en nuevas características para mejorar tu experiencia:
        </p>
        <ul class="features-future">
            <li class="feature-item">
                <span class="feature-icon">📏</span>
                <span><strong class="feature-label">Regla de medición:</strong> Herramienta para medir distancias precisas entre elementos</span>
            </li>
            <li class="feature-item">
                <span class="feature-icon">🌊</span>
                <span><strong class="feature-label">Curvas equipotenciales:</strong> Visualización de líneas de igual potencial eléctrico</span>
            </li>
        </ul>
    </div>

    <!-- Start Box -->
    <div class="content-box box-success">
        <h2 class="section-title">🎓 ¡Comienza a Explorar!</h2>
        <p class="text-content">
            Ahora que conoces las funcionalidades básicas, te invitamos a experimentar 
            con el simulador. Comienza agregando algunas cargas y observa cómo se comporta 
            el campo eléctrico. Cada experimento es una oportunidad de aprendizaje.
        </p>
        <div class="alert-box">
            <p class="text-content">
                <strong class="alert-title">Recuerda:</strong> El panel de documentación se actualizará automáticamente 
                con información relevante según los elementos que agregues al escenario.
            </p>
        </div>
    </div>

    <!-- Footer Note -->
    <div class="footer-note">
        <p class="footer-text">
            ¿Tienes dudas o sugerencias? Este proyecto es parte de nuestro compromiso 
            con la educación en ciencias e ingeniería. ¡Disfruta explorando el fascinante 
            mundo del electromagnetismo!
        </p>
    </div>
</div>`;
        return tpl;
    }

    get styles(): string {
        return `
            /* Estilos para ElectroSim Welcome */

.welcome-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Hero Section */
.hero-section {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #06202B 100%);
    color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hero-title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
}

/* Content Boxes */
.content-box {
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid;
}

.box-dark {
    background-color: #212121;
    border-left-color: #3b82f6;
}

.box-darker {
    background-color: #181818;
    border-left-color: #06b6d4;
}

.box-success {
    background-color: #181818;
    border-left-color: #10b981;
}

/* Typography */
.section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
}

.subsection-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #60a5fa;
    margin-bottom: 1rem;
}

.text-content {
    color: #d1d5db;
    line-height: 1.625;
    margin-bottom: 0.75rem;
}

.text-highlight {
    color: #60a5fa;
    font-weight: bold;
}

/* Lists */
.team-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.team-member {
    color: #d1d5db;
    font-size: 1.125rem;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1.25rem;
}

.list-item {
    color: #d1d5db;
    list-style-type: disc;
}

/* Grid Layouts */
.concepts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .concepts-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
    }
}

.concept-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #303030;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.concept-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.25rem);
}

.concept-title {
    color: #60a5fa;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    font-weight: bold;
}

.concept-description {
    color: #9ca3af;
    font-size: 0.875rem;
}

.col-span-2 {
    grid-column: span 2;
}

/* Add Elements Grid */
.add-elements-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .add-elements-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .add-elements-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.element-card {
    padding: 1.25rem;
    border-radius: 0.75rem;
    text-align: center;
    background-color: #303030;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.element-card:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.25rem);
}

.element-icon {
    font-size: 3rem;
    margin-bottom: 0.75rem;
}

.element-title {
    font-weight: bold;
    color: #60a5fa;
    margin-bottom: 0.5rem;
}

.element-description {
    color: #9ca3af;
    font-size: 0.875rem;
}

/* Instructions Lists */
.instructions-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.instruction-item {
    display: flex;
    align-items: flex-start;
    color: #d1d5db;
    line-height: 1.625;
}

.instruction-bullet {
    color: #3b82f6;
    margin-right: 0.75rem;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.instruction-label {
    color: white;
    font-weight: bold;
}

.keyboard-key {
    background-color: #2563eb;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: bold;
}

/* Tips Cards */
.tips-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.tip-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #10b981;
    background-color: #303030;
}

.tip-title {
    color: #34d399;
    font-weight: bold;
}

.tip-text {
    color: #d1d5db;
}

/* Tech Tags */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Future Features */
.features-future {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.feature-item {
    color: #d1d5db;
    font-size: 1.125rem;
    display: flex;
    align-items: flex-start;
}

.feature-icon {
    margin-right: 0.5rem;
}

.feature-label {
    color: white;
    font-weight: bold;
}

/* Alert Box */
.alert-box {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #eab308;
    background-color: #303030;
}

.alert-title {
    color: #fbbf24;
    font-weight: bold;
}

/* Footer */
.footer-note {
    text-align: center;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: #06202B;
}

.footer-text {
    font-style: italic;
    line-height: 1.625;
    color: #93c5fd;
}

/* Divider */
.divider {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #374151;
}

.text-center {
    text-align: center;
}

.italic {
    font-style: italic;
}

.text-sm {
    font-size: 0.875rem;
}
        `;
    }
}

customElements.define('welcome-docs',WelcomeDocs);