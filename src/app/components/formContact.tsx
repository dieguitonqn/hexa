'use client';
import React, { useState } from "react";

export default function FormContact() {
  interface FormData {
    name: string;
    email: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const [textArea, setTextArea] = useState<string>(''); // Text areas don't have a name attribute

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado de carga

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data (optional)
    setIsLoading(true); // Mostrar indicador de carga
    const bodyCOntent=JSON.stringify({...formData, mensaje:textArea})
    console.log(bodyCOntent);
    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, mensaje: textArea }),
      });

      if (res.status === 200) {
        setStatus('Correo enviado exitosamente');
      } else {
        setStatus('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al enviar el correo');
    }
  };

  return (
    <form className="flex flex-col justify-center p-10 gap-2" onSubmit={handleSubmit}>
      <h1 className="text-3xl my-10">Formulario de contacto</h1>
      <label htmlFor="nombre">Nombre y Apellido:</label>
      <input
        type="text"
        id="nombre"
        name="name"
        className="border border-slate-400 border-opacity-50 shadow-md rounded-sm text-lg p-2 text-black dark:shadow-slate-400"
        placeholder="Ingrese su Nombre y Apellido"
        value={formData.name} // Access the value from formData state
        onChange={handleChange} // Use the handleChange function to update formData
        required
      />
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        id="email"
        name="email"
        className="border border-slate-400 border-opacity-50 shadow-md rounded-sm text-lg p-2 text-black dark:shadow-slate-400"
        placeholder="visitor@example.com"
        value={formData.email} // Access the value from formData state
        onChange={handleChange} // Use the handleChange function to update formData
        required
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        className="border border-slate-400 border-opacity-50 shadow-md rounded-sm text-lg p-2 text-black dark:shadow-slate-400"
        placeholder="Dejenos su mensaje aquí..."
        value={textArea}
        onChange={handleChangeTextArea}
        required
      />
      <button
        className="bg-green-300 py-2 px-4 rounded-sm shadow-sm dark:shadow-slate-400 mx-auto mt-5 max-w-52"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
      <p className="text-center">{status}</p>
    </form>
  );
}