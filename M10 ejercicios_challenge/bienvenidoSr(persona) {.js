function bienvenidoSr(persona) {
    //Tu código aquí
    if (!("invitado" in persona)) {
        return "Disculpe señor, no está invitado a la fiesta";
    }
    if (persona.invitado === false) {
        return "Disculpe señor, no está invitado a la fiesta";
    }
    if ("nombre" in persona && "apellido" in persona) {
        return persona.nombre + " " + persona.apellido + ", " + "un gusto tenerlo nuevamente! Bienvenido";
    }
    if ("nombre" in persona) {
        return "Hola " + persona.nombre +", " + "tu mesa está lista";
    }
    return "Bienvenido Sr. " + persona.apellido 
}