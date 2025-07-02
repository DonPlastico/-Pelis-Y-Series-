<!DOCTYPE html>
<html lang="es">

<body>
    <header>
        <h1>Mis Películas y Series</h1>
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Buscar...">
            <button id="searchButton">🔍</button>
        </div>
    </header>

    <main>
        <section class="description-section">
            <p>
                Bienvenido a <strong>Pelis y Series</strong>, tu espacio personal definitivo para llevar un control
                total de todo lo
                que ves. Esta es una plataforma interactiva que se actualiza constantemente con las últimas películas y
                series, permitiéndote registrar de forma sencilla qué has visto, cuándo lo viste, y cuánto te gustó.
                <br>
                Cada título cuenta con su propia ficha detallada, incluyendo sinopsis, fecha de estreno, y acceso
                directo al botón “¡Ya la vi!”. Al marcar una película o serie como vista, se guarda automáticamente la
                fecha y tienes la opción de valorarla con un intuitivo sistema de estrellas personal.
            </p>
            <p>
                Además, <strong>Pelis y Series</strong> incluye un completo <strong>Panel de Perfil</strong> donde
                puedes:
            </p>
            <ul>
                <li>Revisar tu historial completo de películas y series vistas.</li>
                <li>Consultar estadísticas detalladas de visualización.</li>
                <li>Organizar y acceder rápidamente a tus títulos favoritos.</li>
                <li>Crear un ranking personal basado en tus géneros y valoraciones.</li>
                <li>Ver gráficos informativos con tus géneros más vistos, valoraciones medias y mucho más, para entender
                    mejor tus hábitos.</li>
            </ul>
            <p>
                Todo se guarda de forma automática y segura, y nuestra base de datos se actualiza constantemente con los
                estrenos más recientes para que nunca te pierdas nada del emocionante mundo del cine y la televisión.
            </p>
            <p class="call-to-action">
                ¿Te encanta llevar un seguimiento de todo lo que ves? ¿Quieres compartir tu progreso y tus gustos con
                amigos? Con <strong>Pelis y Series</strong>, cada película o serie cuenta. ¡Empieza hoy mismo a
                organizar tu universo
                audiovisual!
            </p>
        </section>
        <div id="results" class="movie-grid"></div>
        <div id="loading" class="loading-indicator">
            <div class="loader"></div>
            <p>Cargando más contenido...</p>
        </div>
    </main>

    <footer class="main-footer">
        <div class="footer-item">
            <i class="fa-solid fa-tv"></i>
            <span>Series</span>
        </div>
        <div class="footer-item">
            <i class="fa-solid fa-film"></i>
            <span>Películas</span>
        </div>
        <div class="footer-item active">
            <i class="fa-solid fa-house"></i>
            <span>Inicio</span>
        </div>
        <div class="footer-item">
            <i class="fa-solid fa-compass"></i>
            <span>Explorar</span>
        </div>
        <div class="footer-item">
            <i class="fa-solid fa-user-clock"></i>
            <span>Perfil</span>
        </div>
    </footer>

    <script src="/js/script.js"></script>
</body>

</html>
