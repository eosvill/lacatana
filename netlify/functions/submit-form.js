const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        console.log('Form submission received:', data);

        // Configuración de Google Sheets
        const doc = new GoogleSpreadsheet('1pLKXuhfAKv4HwTWpOAQEdCcSzFwEtyRXPm_ahd-xuqI'); // ¡REEMPLAZA ESTO CON TU ID DE HOJA DE CÁLCULO!

        // Decodifica la clave de servicio desde las variables de entorno de Netlify
        const serviceAccountAuth = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString('ascii'));

        await doc.useServiceAccountAuth(serviceAccountAuth);
        await doc.loadInfo(); // Carga la información de la hoja de cálculo

        const sheet = doc.sheetsByIndex[0]; // Accede a la primera hoja (puedes cambiar el índice si necesitas otra)

        // Añade una nueva fila con los datos del formulario
        await sheet.addRow({
            Name: data.name,
            Email: data.email,
            Message: data.message,
            Timestamp: new Date().toLocaleString()
        });

        console.log('Data successfully written to Google Sheet.');

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Permite solicitudes desde cualquier origen
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: 'Formulario recibido y datos guardados con éxito.' }),
        };
    } catch (error) {
        console.error('Error processing form submission:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al procesar el formulario o guardar los datos.', error: error.message }),
        };
    }
};