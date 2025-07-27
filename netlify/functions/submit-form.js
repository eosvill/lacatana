const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    console.log('Raw event body:', event.body);
    console.log('isBase64Encoded:', event.isBase64Encoded);

    try {
        const data = JSON.parse(event.body);
        console.log('Form data parsed:', data);

        // Configuración de Google Sheets
        const doc = new GoogleSpreadsheet('1pLKXuhfAKv4HwTWpOAQEdCcSzFwEtyRXPm_ahd-xuqI'); // ¡REEMPLAZA ESTO CON TU ID DE HOJA DE CÁLCULO!

        // Debugging service account key
        console.log('Raw GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 (from env):', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64);
        console.log('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 length:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 ? process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64.length : 'undefined');
        console.log('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 starts with:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 ? process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64.substring(0, 20) : 'undefined');
        console.log('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 ends with:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 ? process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64.length > 20 ? process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64.substring(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64.length - 20) : process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 : 'undefined');


        let serviceAccountAuth;
        if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64) {
            try {
                // Decode from Base64 and trim any whitespace
                const decodedKey = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString('utf8').trim();
                console.log('Decoded key (trimmed) length:', decodedKey.length);
                console.log('Decoded key (trimmed) starts with:', decodedKey.substring(0, 20));
                console.log('Decoded key (trimmed) ends with:', decodedKey.length > 20 ? decodedKey.substring(decodedKey.length - 20) : decodedKey);

                serviceAccountAuth = JSON.parse(decodedKey);
                console.log('Service account key parsed successfully.');
            } catch (decodeError) {
                console.error('Error decoding or parsing service account key:', decodeError);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: 'Error de configuración de la clave de servicio.', error: decodeError.message }),
                };
            }
        } else {
            console.error('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 environment variable is not set.');
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'La clave de servicio de Google no está configurada.' }),
            };
        }

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
        console.error('Error processing form submission (outer catch): ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al procesar el formulario o guardar los datos.', error: error.message }),
        };
    }
};