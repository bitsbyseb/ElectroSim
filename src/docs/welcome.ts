export const welcomeDocs = `<div class="space-y-6">
    <!-- Hero Section -->
    <div class="text-center p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-xl shadow-xl" style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #06202B 100%);">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">⚡ Bienvenido a ElectroSim</h1>
        <p class="text-xl md:text-2xl opacity-95">Simulador Interactivo de Campos Eléctricos</p>
    </div>

    <!-- Intro Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📚 Sobre el Proyecto</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            <strong class="text-blue-400">ElectroSim</strong> es un simulador educativo desarrollado para facilitar 
            la comprensión de conceptos fundamentales de electromagnetismo a través de 
            visualización interactiva y experimentación en tiempo real.
        </p>
        <p class="text-gray-300 leading-relaxed">
            Este proyecto está desarrollado completamente para la web, lo que significa que 
            puedes acceder a él desde cualquier dispositivo con un navegador moderno, sin 
            necesidad de instalaciones adicionales.
        </p>
    </div>

    <!-- Team Box -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h3 class="text-xl font-bold text-white mb-4">👥 Equipo de Desarrollo</h3>
        <ul class="space-y-2">
            <li class="text-gray-300 text-lg">👤 Johan Sebastian Puentes Pulido</li>
            <li class="text-gray-300 text-lg">👤 Juan Sebastian Caicedo Ruiz</li>
            <li class="text-gray-300 text-lg">👤 Dylan Alejandro Guzman Gomez</li>
        </ul>
        <p class="text-center italic text-gray-400 mt-4 pt-4 border-t border-gray-700">
            Proyecto Académico Universitario
        </p>
    </div>

    <!-- Audience Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎯 ¿Para Quién es Este Simulador?</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            ElectroSim está diseñado para estudiantes de educación superior en áreas como:
        </p>
        <ul class="space-y-2 ml-5">
            <li class="text-gray-300 list-disc">Ingeniería de Sistemas y Computación</li>
            <li class="text-gray-300 list-disc">Ingeniería Electrónica</li>
            <li class="text-gray-300 list-disc">Física y ciencias relacionadas</li>
            <li class="text-gray-300 list-disc">Cualquier persona interesada en comprender el electromagnetismo</li>
        </ul>
    </div>

    <!-- Concepts Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Conceptos que Puedes Explorar</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style="background-color: #303030;">
                <strong class="text-blue-400 block mb-2 text-lg">Campo Eléctrico</strong>
                <p class="text-gray-400 text-sm">Visualiza cómo las cargas generan campos vectoriales en el espacio</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style="background-color: #303030;">
                <strong class="text-blue-400 block mb-2 text-lg">Potencial Eléctrico</strong>
                <p class="text-gray-400 text-sm">Observa la distribución de energía potencial alrededor de las cargas</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style="background-color: #303030;">
                <strong class="text-blue-400 block mb-2 text-lg">Líneas de Campo</strong>
                <p class="text-gray-400 text-sm">Representa gráficamente la dirección y sentido del campo eléctrico</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" style="background-color: #303030;">
                <strong class="text-blue-400 block mb-2 text-lg">Principio de Superposición</strong>
                <p class="text-gray-400 text-sm">Experimenta cómo múltiples cargas combinan sus efectos</p>
            </div>
            <div class="p-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 md:col-span-2" style="background-color: #303030;">
                <strong class="text-blue-400 block mb-2 text-lg">Interacciones y Colisiones</strong>
                <p class="text-gray-400 text-sm">Observa el comportamiento dinámico entre partículas cargadas</p>
            </div>
        </div>
    </div>

    <!-- Guide Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-6">🎮 Cómo Usar el Simulador</h2>
        
        <!-- Add Elements -->
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">➕ Agregar Elementos</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 rounded-xl text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" style="background-color: #303030;">
                    <div class="text-5xl mb-3">🔴</div>
                    <h4 class="font-bold text-blue-400 mb-2">Protones (+)</h4>
                    <p class="text-gray-400 text-sm">Haz clic en el botón <strong class="text-white">"Protón"</strong> en la barra inferior para agregar una carga positiva al centro del lienzo.</p>
                </div>
                <div class="p-5 rounded-xl text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" style="background-color: #303030;">
                    <div class="text-5xl mb-3">🔵</div>
                    <h4 class="font-bold text-blue-400 mb-2">Electrones (−)</h4>
                    <p class="text-gray-400 text-sm">Haz clic en el botón <strong class="text-white">"Electrón"</strong> para agregar una carga negativa al centro del lienzo.</p>
                </div>
                <div class="p-5 rounded-xl text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" style="background-color: #303030;">
                    <div class="text-5xl mb-3">📍</div>
                    <h4 class="font-bold text-blue-400 mb-2">Sensores de Campo</h4>
                    <p class="text-gray-400 text-sm">Agrega sensores que muestran la dirección del campo eléctrico en puntos específicos del espacio.</p>
                </div>
                <div class="p-5 rounded-xl text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" style="background-color: #303030;">
                    <div class="text-5xl mb-3">📊</div>
                    <h4 class="font-bold text-blue-400 mb-2">Sensores de Potencial</h4>
                    <p class="text-gray-400 text-sm">Coloca sensores para visualizar el valor del potencial eléctrico en diferentes ubicaciones.</p>
                </div>
            </div>
        </div>

        <!-- Manipulate Elements -->
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">🖱️ Manipular Elementos</h3>
            <ul class="space-y-3">
                <li class="flex items-start text-gray-300 leading-relaxed">
                    <span class="text-blue-500 mr-3 text-xl flex-shrink-0">▸</span>
                    <span>
                        <strong class="text-white">Mover:</strong> Mantén presionado el <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono text-sm font-bold">clic izquierdo</span> 
                        sobre cualquier elemento y arrástralo a la posición deseada.
                    </span>
                </li>
                <li class="flex items-start text-gray-300 leading-relaxed">
                    <span class="text-blue-500 mr-3 text-xl flex-shrink-0">▸</span>
                    <span>
                        <strong class="text-white">Eliminar:</strong> Coloca el cursor sobre el elemento que deseas eliminar 
                        y presiona la tecla <span class="bg-blue-600 text-white px-2 py-1 rounded font-mono text-sm font-bold">X</span>.
                    </span>
                </li>
                <li class="flex items-start text-gray-300 leading-relaxed">
                    <span class="text-blue-500 mr-3 text-xl flex-shrink-0">▸</span>
                    <span>
                        <strong class="text-white">Resetear:</strong> Usa el botón de <strong class="text-white">"Reset"</strong> para limpiar 
                        completamente el escenario y empezar desde cero.
                    </span>
                </li>
            </ul>
        </div>

        <!-- Visualization -->
        <div class="mb-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">👁️ Visualización</h3>
            <ul class="space-y-3">
                <li class="flex items-start text-gray-300 leading-relaxed">
                    <span class="text-blue-500 mr-3 text-xl flex-shrink-0">▸</span>
                    <span>
                        <strong class="text-white">Líneas de Campo:</strong> Activa la visualización de líneas de campo 
                        para ver una representación gráfica completa del campo eléctrico global.
                    </span>
                </li>
                <li class="flex items-start text-gray-300 leading-relaxed">
                    <span class="text-blue-500 mr-3 text-xl flex-shrink-0">▸</span>
                    <span>
                        <strong class="text-white">Sensores Dinámicos:</strong> Los sensores se actualizan en tiempo real 
                        mostrando flechas que indican la dirección y magnitud del campo.
                    </span>
                </li>
            </ul>
        </div>

        <!-- Documentation Panel -->
        <div>
            <h3 class="text-xl font-semibold text-blue-400 mb-4">📖 Panel de Documentación</h3>
            <p class="text-gray-300 leading-relaxed mb-3">
                Al agregar cualquier elemento al escenario, este panel (ubicado a la derecha) 
                se actualizará automáticamente mostrando información relevante sobre:
            </p>
            <ul class="space-y-2 ml-5">
                <li class="text-gray-300 list-disc">Las ecuaciones matemáticas relacionadas</li>
                <li class="text-gray-300 list-disc">Explicaciones de los conceptos físicos involucrados</li>
                <li class="text-gray-300 list-disc">Variables y unidades de medida</li>
                <li class="text-gray-300 list-disc">Propiedades y comportamiento del elemento</li>
            </ul>
        </div>
    </div>

    <!-- Tips Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Consejos para Aprovechar al Máximo</h2>
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔬 Experimenta libremente:</strong> 
                <span class="text-gray-300"> No hay forma de "romper" el simulador. 
                Prueba diferentes configuraciones de cargas y observa los resultados.</span>
            </div>
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📐 Prueba la simetría:</strong> 
                <span class="text-gray-300"> Coloca cargas en patrones simétricos 
                (línea, círculo, cuadrado) y observa las líneas de campo resultantes.</span>
            </div>
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">⚖️ Cargas opuestas:</strong> 
                <span class="text-gray-300"> Experimenta con pares de cargas de signos 
                opuestos y observa cómo interactúan sus campos (configuración dipolar).</span>
            </div>
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🎯 Usa sensores estratégicamente:</strong> 
                <span class="text-gray-300"> Coloca sensores en puntos 
                clave para comparar la intensidad del campo en diferentes ubicaciones.</span>
            </div>
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📚 Lee la documentación:</strong> 
                <span class="text-gray-300"> Cada vez que agregues un elemento, 
                revisa el panel de documentación para profundizar en la teoría.</span>
            </div>
        </div>
    </div>

    <!-- Tech Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🛠️ Tecnologías Utilizadas</h2>
        <p class="text-gray-300 leading-relaxed mb-4">
            ElectroSim está construido con tecnologías web modernas:
        </p>
        <div class="flex flex-wrap gap-3 mb-4">
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">TypeScript</span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">Vite</span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">P5.js</span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">Canvas API</span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">WebGL</span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">TailwindCSS</span>
        </div>
        <p class="text-gray-400 text-sm italic">
            Esto garantiza un rendimiento óptimo y compatibilidad con navegadores modernos, 
            permitiendo simulaciones fluidas y visualizaciones de alta calidad.
        </p>
    </div>

    <!-- Future Box -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🚀 Próximas Funcionalidades</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            Estamos trabajando en nuevas características para mejorar tu experiencia:
        </p>
        <ul class="space-y-3">
            <li class="text-gray-300 text-lg flex items-start">
                <span class="mr-2">📏</span>
                <span><strong class="text-white">Regla de medición:</strong> Herramienta para medir distancias precisas entre elementos</span>
            </li>
            <li class="text-gray-300 text-lg flex items-start">
                <span class="mr-2">🌊</span>
                <span><strong class="text-white">Curvas equipotenciales:</strong> Visualización de líneas de igual potencial eléctrico</span>
            </li>
        </ul>
    </div>

    <!-- Start Box -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🎓 ¡Comienza a Explorar!</h2>
        <p class="text-gray-300 leading-relaxed mb-4">
            Ahora que conoces las funcionalidades básicas, te invitamos a experimentar 
            con el simulador. Comienza agregando algunas cargas y observa cómo se comporta 
            el campo eléctrico. Cada experimento es una oportunidad de aprendizaje.
        </p>
        <div class="p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300">
                <strong class="text-yellow-400">Recuerda:</strong> El panel de documentación se actualizará automáticamente 
                con información relevante según los elementos que agregues al escenario.
            </p>
        </div>
    </div>

    <!-- Footer Note -->
    <div class="text-center p-6 rounded-xl" style="background-color: #06202B;">
        <p class="italic leading-relaxed text-blue-300">
            ¿Tienes dudas o sugerencias? Este proyecto es parte de nuestro compromiso 
            con la educación en ciencias e ingeniería. ¡Disfruta explorando el fascinante 
            mundo del electromagnetismo!
        </p>
    </div>
</div>`;