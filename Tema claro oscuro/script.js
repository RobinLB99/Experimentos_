// Seleccionar la lista desplegable y el cuerpo del documento
const themeSelect = document.getElementById('theme-select');
const body = document.querySelector('body');

// Agregar un event listener a la lista desplegable
themeSelect.addEventListener('change', function() {
	setTheme(themeSelect.value);
});

// Función para cambiar el tema de la página
function setTheme(theme) {
	if (theme === 'light') {
		body.style.setProperty('--bg-color', '#FFFFFF');
		body.style.setProperty('--text-color', '#333333');
		body.style.setProperty('--header-bg-color', '#CCCCCC');
		body.style.setProperty('--header-text-color', '#333333');
	} else if (theme === 'dark') {
		body.style.setProperty('--bg-color', '#333333');
		body.style.setProperty('--text-color', '#FFFFFF');
		body.style.setProperty('--header-bg-color', '#666666');
		body.style.setProperty('--header-text-color', '#FFFFFF');
	} else {
		// Si se selecciona automático, se utiliza el tema predeterminado del usuario
		const defaultTheme = getDefaultTheme();
		setTheme(defaultTheme);
	}
}

// Función para obtener el tema predeterminado del usuario
function getDefaultTheme() {
	// Se utiliza la API de preferencias de color para obtener el tema del usuario
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	} else {
		return 'light';
	}
}

// Al cargar la página, se establece el tema predeterminado del usuario
const defaultTheme = getDefaultTheme();
setTheme(defaultTheme);
