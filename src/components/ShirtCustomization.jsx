import React, { useState, useRef, useEffect } from "react";
import * as fabric from "fabric";

const ShirtCustomization = () => {
  const [shirtColor, setShirtColor] = useState("#FFFFFF"); // Color inicial blanco
  const [selectedPrint, setSelectedPrint] = useState(null); // Estampado seleccionado
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);

  useEffect(() => {
    fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: shirtColor,
      selection: false, // deshabilitar selección para evitar mover la camiseta
    });

    // Crear una camiseta de fondo blanco
    fabricCanvas.current.add(
      new fabric.Rect({
        left: 50,
        top: 50,
        fill: shirtColor,
        width: 300,
        height: 300,
        cornerRadius: 20,
      })
    );

    // Renderizar estampado si existe
    if (selectedPrint) {
      fabric.Image.fromURL(selectedPrint, (img) => {
        img.set({ left: 120, top: 150, scaleX: 0.3, scaleY: 0.3 });
        fabricCanvas.current.add(img);
      });
    }

    return () => {
      fabricCanvas.current.dispose();
    };
  }, [shirtColor, selectedPrint]);

  // Función para cambiar el color de la camiseta
  const handleColorChange = (color) => {
    setShirtColor(color);
    fabricCanvas.current.setBackgroundColor(color, fabricCanvas.current.renderAll.bind(fabricCanvas.current));
  };

  // Función para cambiar el estampado
  const handlePrintChange = (imageURL) => {
    setSelectedPrint(imageURL);
  };

  return (
    <div className="customization-container">
      <h2>Personaliza tu camiseta</h2>

      {/* Opciones de color */}
      <div className="color-options">
        <button onClick={() => handleColorChange("#FF5733")}>Rojo</button>
        <button onClick={() => handleColorChange("#33FF57")}>Verde</button>
        <button onClick={() => handleColorChange("#3357FF")}>Azul</button>
        <button onClick={() => handleColorChange("#FFFFFF")}>Blanco</button>
      </div>

      {/* Opciones de estampado */}
      <div className="print-options">
        <button onClick={() => handlePrintChange("/assets/print-1.png")}>Estampado 1</button>
        <button onClick={() => handlePrintChange("/assets/print-2.png")}>Estampado 2</button>
        <button onClick={() => handlePrintChange("/assets/print-3.png")}>Estampado 3</button>
      </div>

      {/* Vista previa de la camiseta */}
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>

      <div className="actions">
        <button className="save-button">Guardar personalización</button>
        <button className="add-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ShirtCustomization;
