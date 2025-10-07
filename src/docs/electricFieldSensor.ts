export const electricFieldSensorDoc = `
<div class="space-y-6">
    <!-- Hero Section -->
    <div class="text-center p-8 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 text-white rounded-xl shadow-xl">
        <div class="text-6xl mb-4">📍</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-3">Sensor de Campo Eléctrico</h1>
        <p class="text-xl md:text-2xl opacity-95">Herramienta de Medición Vectorial</p>
    </div>

    <!-- Introduction -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎯 ¿Qué es el Sensor de Campo Eléctrico?</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            El <strong class="text-orange-400">sensor de campo eléctrico</strong> es una herramienta de visualización 
            que te permite medir y observar la dirección e intensidad del campo eléctrico en cualquier punto del espacio.
        </p>
        <p class="text-gray-300 leading-relaxed">
            En el simulador, este sensor aparece como una <strong class="text-white">flecha (vector)</strong> que 
            apunta en la dirección del campo eléctrico resultante en su ubicación, con una longitud proporcional 
            a su magnitud.
        </p>
    </div>

    <!-- How it Works -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚙️ ¿Cómo Funciona?</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <p class="text-gray-300 leading-relaxed mb-4">
                El sensor calcula el campo eléctrico total en su posición utilizando el 
                <strong class="text-white">principio de superposición</strong>:
            </p>
            
            <div class="text-center mb-4">
                \\[ \\vec{E}_{\\text{total}} = \\sum_{i=1}^{n} \\vec{E}_i = \\sum_{i=1}^{n} \\frac{kQ_i}{r_i^2}\\hat{r}_i \\]
            </div>
            
            <p class="text-gray-400 text-center text-sm">
                Donde se suman vectorialmente las contribuciones de todas las cargas presentes
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-orange-400" style="background-color: #303030;">
                <h4 class="text-orange-400 font-bold mb-2">📐 Magnitud</h4>
                <p class="text-gray-300 text-sm">
                    La <strong class="text-white">longitud de la flecha</strong> representa la intensidad 
                    del campo eléctrico en ese punto. Mayor longitud = campo más intenso.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-orange-400" style="background-color: #303030;">
                <h4 class="text-orange-400 font-bold mb-2">🧭 Dirección</h4>
                <p class="text-gray-300 text-sm">
                    La <strong class="text-white">orientación de la flecha</strong> muestra hacia dónde 
                    apunta el campo eléctrico (dirección en la que se movería una carga positiva).
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-orange-400" style="background-color: #303030;">
                <h4 class="text-orange-400 font-bold mb-2">🔄 Tiempo Real</h4>
                <p class="text-gray-300 text-sm">
                    El sensor se actualiza <strong class="text-white">instantáneamente</strong> cuando 
                    mueves cargas o agregas/eliminas elementos del escenario.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-orange-400" style="background-color: #303030;">
                <h4 class="text-orange-400 font-bold mb-2">🎨 Color</h4>
                <p class="text-gray-300 text-sm">
                    El color <strong class="text-orange-400">naranja</strong> distintivo te ayuda a 
                    identificar rápidamente los sensores de campo en el escenario.
                </p>
            </div>
        </div>
    </div>

    <!-- Mathematical Foundation -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📐 Fundamento Matemático</h2>
        
        <div class="space-y-4">
            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-orange-400 font-bold mb-3">Campo de una Carga Puntual</h3>
                <div class="text-center mb-3">
                    \\[ \\vec{E} = \\frac{kQ}{r^2}\\hat{r} \\]
                </div>
                <div class="space-y-2 text-gray-300 text-sm">
                    <p class="flex items-start">
                        <span class="text-orange-500 mr-3 flex-shrink-0">▸</span>
                        <span>\\(\\vec{E}\\) = Vector de campo eléctrico (N/C)</span>
                    </p>
                    <p class="flex items-start">
                        <span class="text-orange-500 mr-3 flex-shrink-0">▸</span>
                        <span>\\(k = 8.99 \\times 10^9\\) N·m²/C² = Constante de Coulomb</span>
                    </p>
                    <p class="flex items-start">
                        <span class="text-orange-500 mr-3 flex-shrink-0">▸</span>
                        <span>\\(Q\\) = Carga fuente (C)</span>
                    </p>
                    <p class="flex items-start">
                        <span class="text-orange-500 mr-3 flex-shrink-0">▸</span>
                        <span>\\(r\\) = Distancia a la carga (m)</span>
                    </p>
                    <p class="flex items-start">
                        <span class="text-orange-500 mr-3 flex-shrink-0">▸</span>
                        <span>\\(\\hat{r}\\) = Vector unitario radial</span>
                    </p>
                </div>
            </div>

            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-orange-400 font-bold mb-3">Principio de Superposición</h3>
                <p class="text-gray-300 mb-3">
                    Cuando hay múltiples cargas, el campo total es la <strong class="text-white">suma vectorial</strong> 
                    de todos los campos individuales:
                </p>
                <div class="text-center mb-3">
                    \\[ \\vec{E}_{\\text{total}} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + \\cdots + \\vec{E}_n \\]
                </div>
                <p class="text-gray-400 text-sm text-center">
                    Esta es la operación que el sensor realiza automáticamente
                </p>
            </div>

            <div class="p-5 rounded-lg" style="background-color: #303030;">
                <h3 class="text-orange-400 font-bold mb-3">Componentes Cartesianas</h3>
                <p class="text-gray-300 mb-3">
                    El campo eléctrico se puede descomponer en componentes \\(x\\) e \\(y\\):
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="text-center">
                        \\[ E_x = E \\cos(\\theta) \\]
                    </div>
                    <div class="text-center">
                        \\[ E_y = E \\sin(\\theta) \\]
                    </div>
                </div>
                <p class="text-gray-400 text-sm text-center mt-3">
                    Donde \\(\\theta\\) es el ángulo con respecto al eje \\(x\\)
                </p>
            </div>
        </div>
    </div>

    <!-- Interpretation Guide -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🔍 Guía de Interpretación</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">🔴 Cerca de una Carga Positiva</h4>
                <p class="text-gray-300 text-sm">
                    La flecha apunta <strong class="text-white">hacia afuera</strong> (alejándose de la carga). 
                    Muy larga cerca de la carga, disminuye rápidamente con la distancia (\\(\\propto 1/r^2\\)).
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">🔵 Cerca de una Carga Negativa</h4>
                <p class="text-gray-300 text-sm">
                    La flecha apunta <strong class="text-white">hacia adentro</strong> (hacia la carga). 
                    El campo converge hacia el electrón desde todas las direcciones.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-green-500" style="background-color: #303030;">
                <h4 class="text-green-400 font-bold mb-2">🔴🔵 Entre Cargas Opuestas (Dipolo)</h4>
                <p class="text-gray-300 text-sm">
                    Las flechas forman <strong class="text-white">curvas</strong> que van de la carga positiva 
                    a la negativa. En el punto medio, el campo puede ser fuerte o débil dependiendo de la 
                    distancia entre las cargas.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-red-500" style="background-color: #303030;">
                <h4 class="text-red-400 font-bold mb-2">🔴🔴 Entre Cargas del Mismo Signo</h4>
                <p class="text-gray-300 text-sm">
                    Existe un punto entre ellas donde el campo es <strong class="text-white">cero</strong> 
                    (la flecha desaparece o es muy pequeña). Las flechas se "repelen" entre sí.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-500" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">📍 Lejos de Todas las Cargas</h4>
                <p class="text-gray-300 text-sm">
                    El campo es <strong class="text-white">débil</strong> (flecha pequeña) y apunta en la 
                    dirección de la carga dominante o del centro de masa de cargas del mismo signo.
                </p>
            </div>
        </div>
    </div>

    <!-- Use Cases -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Casos de Uso Prácticos</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📊 Mapeo de Campo:</strong>
                <span class="text-gray-300"> Coloca múltiples sensores en una cuadrícula para crear un 
                "mapa vectorial" del campo eléctrico y visualizar su estructura completa.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🎯 Puntos de Equilibrio:</strong>
                <span class="text-gray-300"> Busca ubicaciones donde la flecha desaparece o es muy pequeña. 
                Estos son puntos donde el campo eléctrico neto es cero.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📏 Ley del Inverso del Cuadrado:</strong>
                <span class="text-gray-300"> Coloca sensores a diferentes distancias de una carga y observa 
                cómo la longitud de la flecha disminuye con \\(1/r^2\\).</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔄 Simetría:</strong>
                <span class="text-gray-300"> Coloca sensores alrededor de una configuración simétrica de 
                cargas para verificar que el campo mantiene la simetría esperada.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">⚡ Líneas de Campo:</strong>
                <span class="text-gray-300"> Las flechas de los sensores son tangentes a las líneas de 
                campo eléctrico. Úsalos para predecir cómo se verán las líneas de campo.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🧲 Fuerza sobre Cargas:</strong>
                <span class="text-gray-300"> La flecha muestra la dirección de la fuerza que experimentaría 
                una carga positiva de prueba. Para cargas negativas, la fuerza es opuesta.</span>
            </div>
        </div>
    </div>

    <!-- Physical Significance -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🌟 Significado Físico</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <h3 class="text-cyan-400 font-bold mb-3">¿Qué Representa el Campo Eléctrico?</h3>
            <p class="text-gray-300 leading-relaxed mb-3">
                El campo eléctrico es una propiedad del espacio que describe la 
                <strong class="text-white">fuerza por unidad de carga</strong> que experimentaría 
                una carga de prueba en ese punto:
            </p>
            <div class="text-center mb-3">
                \\[ \\vec{E} = \\frac{\\vec{F}}{q_0} \\]
            </div>
            <p class="text-gray-400 text-sm text-center">
                Donde \\(\\vec{F}\\) es la fuerza sobre una carga de prueba \\(q_0\\)
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">🎯 Concepto Clave</h4>
                <p class="text-gray-300 text-sm">
                    El campo eléctrico existe <strong class="text-white">independientemente</strong> de 
                    que haya una carga de prueba para medirlo. Es una propiedad del espacio creada 
                    por las cargas fuente.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">⚡ Magnitud en N/C</h4>
                <p class="text-gray-300 text-sm">
                    Las unidades Newtons por Coulomb (N/C) nos dicen cuánta fuerza (en Newtons) 
                    experimentará cada Coulomb de carga colocado en ese punto.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">🌊 Campo Vectorial</h4>
                <p class="text-gray-300 text-sm">
                    El campo eléctrico es un <strong class="text-white">campo vectorial</strong>: 
                    tiene una magnitud y dirección específicas en cada punto del espacio.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">📐 Gradiente del Potencial</h4>
                <p class="text-gray-300 text-sm">
                    El campo eléctrico apunta en la dirección donde el potencial disminuye 
                    más rápidamente: \\(\\vec{E} = -\\nabla V\\)
                </p>
            </div>
        </div>
    </div>

    <!-- Relationship with Force -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">💪 Relación con la Fuerza Eléctrica</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <p class="text-gray-300 leading-relaxed mb-4">
                Si conoces el campo eléctrico en un punto, puedes calcular la fuerza sobre 
                cualquier carga \\(q\\) en ese punto:
            </p>
            <div class="text-center mb-4">
                \\[ \\vec{F} = q\\vec{E} \\]
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-3 rounded border-l-4 border-green-500" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q > 0\\):</strong><br>
                        La fuerza apunta en la <strong class="text-green-400">misma dirección</strong> que el campo
                    </p>
                </div>
                <div class="p-3 rounded border-l-4 border-blue-500" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q &lt; 0\\):</strong><br>
                        La fuerza apunta en <strong class="text-blue-400">dirección opuesta</strong> al campo
                    </p>
                </div>
            </div>
        </div>

        <div class="p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-400">💡 Ejemplo práctico:</strong> Si el sensor muestra un campo 
                de 1000 N/C hacia la derecha, y colocas una carga de +2 µC, experimentará una fuerza de 
                0.002 N hacia la derecha. Si la carga fuera -2 µC, la fuerza sería 0.002 N hacia la izquierda.
            </p>
        </div>
    </div>

    <!-- Tips and Tricks -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">💡 Consejos y Trucos</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🎯 Ubicación Estratégica</h4>
                <p class="text-gray-300 text-sm">
                    Coloca sensores en ubicaciones clave: entre cargas, en ejes de simetría, 
                    y a diferentes distancias para obtener una comprensión completa del campo.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🔄 Movimiento Dinámico</h4>
                <p class="text-gray-300 text-sm">
                    Mueve un sensor alrededor del escenario y observa cómo cambia la flecha. 
                    Esto te da una intuición de cómo varía el campo en el espacio.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">📊 Comparación Cuantitativa</h4>
                <p class="text-gray-300 text-sm">
                    Compara las longitudes de las flechas en diferentes sensores para identificar 
                    dónde el campo es más fuerte o más débil.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🌐 Combina con Líneas de Campo</h4>
                <p class="text-gray-300 text-sm">
                    Activa las líneas de campo globales y coloca sensores. Verás que las flechas 
                    son siempre <strong class="text-white">tangentes</strong> a las líneas de campo.
                </p>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <div class="p-6 rounded-xl border-l-4 border-orange-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Controles del Sensor</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">➕</div>
                <h4 class="text-orange-400 font-bold mb-2">Agregar</h4>
                <p class="text-gray-300 text-sm">
                    Clic en el botón de sensor de campo eléctrico. Aparece en el centro del lienzo.
                </p>
            </div>

            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">🖱️</div>
                <h4 class="text-orange-400 font-bold mb-2">Mover</h4>
                <p class="text-gray-300 text-sm">
                    Mantén clic izquierdo sobre el sensor y arrástralo a cualquier posición.
                </p>
            </div>

            <div class="p-4 rounded-lg text-center" style="background-color: #303030;">
                <div class="text-3xl mb-2">❌</div>
                <h4 class="text-orange-400 font-bold mb-2">Eliminar</h4>
                <p class="text-gray-300 text-sm">
                    Coloca el cursor sobre el sensor y presiona la tecla <span class="bg-orange-600 text-white px-2 py-1 rounded font-mono text-xs font-bold">X</span>
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="p-6 rounded-xl text-center" style="background-color: #06202B;">
        <h3 class="text-xl font-bold text-orange-400 mb-3">📌 Resumen Clave</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Función:</strong><br>
                    Visualiza dirección e intensidad del campo eléctrico
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Representación:</strong><br>
                    Flecha vectorial (magnitud y dirección)
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Utilidad:</strong><br>
                    Mapeo, análisis y comprensión del campo
                </p>
            </div>
        </div>
        <p class="text-orange-300 text-sm mt-4 italic">
            Herramienta esencial para visualizar y comprender la estructura del campo eléctrico
        </p>
    </div>
</div>
`;