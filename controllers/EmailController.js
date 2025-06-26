import EmailService from "../services/EmailService.js";
import { Presupuesto } from "../types/PresupuestoViewModel.js";

function validarCampos(obj) {
  for (const [_, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === '') {
      return false;
    }
  }
  return true;
}

const enviarCodigoFormulario = async (req, res) => {
  try {
    const {
      tipoServicio,
      nombre,
      telefono,
      email,
      fecha,
      direccionOrigen,
      direccionDestino,
      consulta,
      politicaPrivacidad
    } = req.body;

    const presupuestoData = {
      tipoServicio,
      nombre,
      telefono,
      email,
      fecha,
      direccionOrigen,
      direccionDestino,
      consulta,
      politicaPrivacidad
    };

    const camposValidos = validarCampos(presupuestoData);

    if (!camposValidos) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const presupuesto = new Presupuesto(presupuestoData);

    await EmailService.enviarCorreoFormulario(presupuesto);

    return res.status(200).json({ message: "Correo electrónico enviado con éxito" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
};

export default enviarCodigoFormulario;