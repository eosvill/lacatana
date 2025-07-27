exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        console.log('Form submission received:', data);

        // Aquí es donde más tarde integraremos la lógica para Google Sheets

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: 'Formulario recibido con éxito (simulado).' }),
        };
    } catch (error) {
        console.error('Error parsing form submission:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Error al procesar el formulario.' }),
        };
    }
};