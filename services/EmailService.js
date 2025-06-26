import transporter from '../config/nodemailer.js';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EmailService = {
  
  async enviarCorreoFormulario(presupuesto) {
    try {
      await this.generarMailOptions(presupuesto);
      return { success: true, message: 'Correos enviados exitosamente.' };
    } catch (error) {
      console.error('Error al enviar correos:', error);
      throw error;
    }
  },

  async generarMailOptions(presupuesto) {
    
  const templatePath = path.join(__dirname, '../templates/emails/correo_formulario.ejs');
  const logoPath = path.join(__dirname, '../public/images/logo_con_descripcion.jpg');

  try {
    const html = await ejs.renderFile(templatePath, {
      presupuesto,
      logoUrl: 'cid:logo', // Usamos un cid para referenciar la imagen incrustada
      direccion: 'Calle del Corregidor José de Pasamonte 5, Madrid',
      codigoPostal: '28030',
      movil: '+34 605 583 791'
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: [presupuesto.email, 'mudanzasromeroj@gmail.com'],
      subject: 'Detalles del presupuesto de mudanza',
      html,
      attachments: [
        {
          filename: 'logo_con_descripcion.jpg',
          path: logoPath, 
          cid: 'logo' 
        }
      ]
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
}
};

export default EmailService;
