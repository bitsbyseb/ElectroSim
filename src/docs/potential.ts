export const potentialSensorDoc = `
<div class="space-y-6">
    <!-- Hero Section -->
    <div class="text-center p-8 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white rounded-xl shadow-xl">
        <div class="text-6xl mb-4">📊</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-3">Sensor de Potencial Eléctrico</h1>
        <p class="text-xl md:text-2xl opacity-95">Medidor de Energía Potencial Eléctrica</p>
    </div>

    <!-- Introduction -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎯 ¿Qué es el Sensor de Potencial?</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            El <strong class="text-green-400">sensor de potencial eléctrico</strong> es una herramienta que 
            mide el valor del potencial eléctrico (voltaje) en un punto específico del espacio.
        </p>
        <p class="text-gray-300 leading-relaxed">
            A diferencia del campo eléctrico (que es vectorial), el potencial eléctrico es una 
            <strong class="text-white">magnitud escalar</strong>, es decir, solo tiene valor numérico 
            sin dirección asociada.
        </p>
    </div>

    <!-- What is Potential -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ ¿Qué es el Potencial Eléctrico?</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <p class="text-gray-300 leading-relaxed mb-4">
                El potencial eléctrico en un punto es la <strong class="text-white">energía potencial 
                eléctrica por unidad de carga</strong> en ese punto:
            </p>
            <div class="text-center mb-4">
                \\[ V = \\frac{U}{q_0} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Donde \\(U\\) es la energía potencial y \\(q_0\\) es una carga de prueba
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-green-400" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-2">📏 Unidades</h4>
                <p class="text-gray-300 text-sm mb-2">
                    Se mide en <strong class="text-white">Voltios (V)</strong>:
                </p>
                <div class="text-center text-sm">
                    \\[ 1 \\text{ V} = 1 \\frac{\\text{J}}{\\text{C}} \\]
                </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-green-400" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-2">🎯 Signo</h4>
                <p class="text-gray-300 text-sm">
                    \\(V > 0\\) cerca de cargas positivas<br>
                    \\(V &lt; 0\\) cerca de cargas negativas
                </p>
            </div>
        </div>
    </div>

    <!-- Mathematical Foundation -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📐 Fórmulas Fundamentales</h2>
        
        <div class="space-y-4">
            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-green-400 font-bold mb-3">Potencial de una Carga Puntual</h3>
                <div class="text-center mb-3">
                    \\[ V = \\frac{kQ}{r} \\]
                </div>
                <div class="space-y-2 text-gray-300 text-sm">
                    <p>• \\(V\\) = Potencial eléctrico (V)</p>
                    <p>• \\(k = 8.99 \\times 10^9\\) N·m²/C²</p>
                    <p>• \\(Q\\) = Carga fuente (C)</p>
                    <p>• \\(r\\) = Distancia a la carga (m)</p>
                </div>
            </div>

            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-green-400 font-bold mb-3">Principio de Superposición</h3>
                <div class="text-center mb-3">
                    \\[ V_{\\text{total}} = \\sum_{i=1}^{n} \\frac{kQ_i}{r_i} \\]
                </div>
                <p class="text-gray-400 text-sm text-center">
                    Suma algebraica simple (no vectorial)
                </p>
            </div>

            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-green-400 font-bold mb-3">Relación con el Campo Eléctrico</h3>
                <div class="text-center mb-3">
                    \\[ \\vec{E} = -\\nabla V \\]
                </div>
                <p class="text-gray-400 text-sm text-center">
                    El campo apunta donde el potencial disminuye más rápido
                </p>
            </div>
        </div>
    </div>

    <!-- How it Works -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚙️ ¿Cómo Funciona el Sensor?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-green-400" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-2">📊 Visualización</h4>
                <p class="text-gray-300 text-sm">
                    Muestra el <strong class="text-white">valor numérico</strong> del potencial, 
                    sin flecha (es escalar, no vectorial).
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-green-400" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-2">🔄 Actualización</h4>
                <p class="text-gray-300 text-sm">
                    Se actualiza en <strong class="text-white">tiempo real</strong> al mover 
                    cargas o modificar el escenario.
                </p>
            </div>
        </div>
    </div>

    <!-- Interpretation Guide -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🔍 Guía de Interpretación</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-red-500" style="background-color: #303030;">
                <h4 class="text-red-400 font-bold mb-2">🔴 Cerca de Carga Positiva</h4>
                <p class="text-gray-300 text-sm">
                    \\(V\\) es positivo y alto. Disminuye con \\(1/r\\) al alejarse.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">🔵 Cerca de Carga Negativa</h4>
                <p class="text-gray-300 text-sm">
                    \\(V\\) es negativo. Se hace menos negativo al alejarse.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-500" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🔴🔵 Entre Cargas Opuestas</h4>
                <p class="text-gray-300 text-sm">
                    Existe un punto donde \\(V = 0\\) (equilibrio de potenciales).
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
                <h4 class="text-yellow-400 font-bold mb-2">🔴🔴 o 🔵🔵 Mismo Signo</h4>
                <p class="text-gray-300 text-sm">
                    Los potenciales se suman. Nunca hay un punto con \\(V = 0\\) entre ellas.
                </p>
            </div>
        </div>
    </div>

    <!-- Physical Meaning -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🌟 Significado Físico</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <h3 class="text-cyan-400 font-bold mb-3">¿Qué Representa?</h3>
            <ul class="space-y-2 text-gray-300 text-sm">
                <li>• Energía potencial por unidad de carga</li>
                <li>• Trabajo necesario para traer una carga desde el infinito</li>
                <li>• "Altura" en el paisaje energético del campo eléctrico</li>
            </ul>
        </div>

        <div class="p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #303030;">
            <h4 class="text-cyan-400 font-bold mb-2">⚡ Analogía</h4>
            <p class="text-gray-300 text-sm">
                Como la altura en gravedad: las cargas positivas "ruedan" de alto a bajo potencial, 
                igual que una pelota rueda cuesta abajo.
            </p>
        </div>
    </div>

    <!-- Use Cases -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Casos de Uso Prácticos</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🗺️ Mapeo:</strong>
                <span class="text-gray-300"> Coloca sensores en cuadrícula para visualizar 
                el "paisaje" del potencial eléctrico.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📏 Ley \\(1/r\\):</strong>
                <span class="text-gray-300"> Observa cómo el potencial disminuye con \\(1/r\\) 
                (más lento que el campo que va con \\(1/r^2\\)).</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">⚡ Diferencias \\(\\Delta V\\):</strong>
                <span class="text-gray-300"> Usa dos sensores para calcular voltajes. 
                Esta diferencia determina el trabajo para mover cargas.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🌊 Equipotenciales:</strong>
                <span class="text-gray-300"> Encuentra puntos con igual potencial para 
                trazar líneas equipotenciales (perpendiculares al campo).</span>
            </div>
        </div>
    </div>

    <!-- Comparison -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">⚖️ Potencial vs Campo Eléctrico</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-3">📊 Potencial (V)</h4>
                <ul class="space-y-1 text-gray-300 text-sm">
                    <li>• Magnitud escalar</li>
                    <li>• Unidades: Voltios (V)</li>
                    <li>• Disminuye con \\(1/r\\)</li>
                    <li>• Suma algebraica simple</li>
                    <li>• Más fácil de calcular</li>
                </ul>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-orange-400 font-bold mb-3">📍 Campo (\\(\\vec{E}\\))</h4>
                <ul class="space-y-1 text-gray-300 text-sm">
                    <li>• Magnitud vectorial</li>
                    <li>• Unidades: N/C o V/m</li>
                    <li>• Disminuye con \\(1/r^2\\)</li>
                    <li>• Suma vectorial compleja</li>
                    <li>• Más complejo de calcular</li>
                </ul>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #303030;">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-400">🔑 Relación:</strong> 
                \\(\\vec{E} = -\\nabla V\\). El campo apunta donde el potencial disminuye. 
                Las líneas equipotenciales son perpendiculares a las líneas de campo.
            </p>
        </div>
    </div>

    <!-- Energy Calculations -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Cálculos de Energía</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-green-400 font-bold mb-3">Energía Potencial</h3>
                <div class="text-center mb-2">
                    \\[ U = qV \\]
                </div>
                <p class="text-gray-400 text-sm text-center">
                    Energía de una carga \\(q\\) en potencial \\(V\\)
                </p>
            </div>

            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-green-400 font-bold mb-3">Trabajo</h3>
                <div class="text-center mb-2">
                    \\[ W = q\\Delta V \\]
                </div>
                <p class="text-gray-400 text-sm text-center">
                    Trabajo para mover carga \\(q\\) con diferencia \\(\\Delta V\\)
                </p>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <div class="p-6 rounded-xl border-l-4 border-green-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Controles del Sensor</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">➕</div>
                <h4 class="text-green-400 font-bold mb-2">Agregar</h4>
                <p class="text-gray-300 text-sm">
                    Clic en botón de sensor de potencial
                </p>
            </div>

            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">🖱️</div>
                <h4 class="text-green-400 font-bold mb-2">Mover</h4>
                <p class="text-gray-300 text-sm">
                    Mantén clic y arrastra
                </p>
            </div>

            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">❌</div>
                <h4 class="text-green-400 font-bold mb-2">Eliminar</h4>
                <p class="text-gray-300 text-sm">
                    Cursor sobre sensor + tecla <span class="bg-green-600 text-white px-2 py-1 rounded font-mono text-xs font-bold">X</span>
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="p-6 rounded-xl text-center" style="background-color: #06202B;">
        <h3 class="text-xl font-bold text-green-400 mb-3">📌 Resumen Clave</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Tipo:</strong><br>
                    Magnitud escalar (sin dirección)
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Función:</strong><br>
                    Energía potencial por carga
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Disminución:</strong><br>
                    Proporcional a \\(1/r\\)
                </p>
            </div>
        </div>
        <p class="text-green-300 text-sm mt-4 italic">
            Herramienta fundamental para analizar energía y trabajo en campos eléctricos
        </p>
    </div>
</div>
`;