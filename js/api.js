function buscarAlimento() {
    var claveAPI = "fZb0NO6FXNDKHFE9d9zcPKU8EGAPjmmkxbnX0pOy";
    var nombreAlimento = document.getElementById("inputAlimento").value;
    var url = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" + claveAPI + "&query=" + encodeURIComponent(nombreAlimento);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(respuesta) {
            mostrarDetallesAlimento(respuesta);
        },
        error: function(xhr, estado, error) {
            console.error("Error al buscar alimentos:", error);
        }
    });
}

function mostrarDetallesAlimento(datos) {
    var divDetallesAlimento = document.getElementById("detallesAlimento");
    divDetallesAlimento.innerHTML = ""; 
    
    if (datos.foods && datos.foods.length > 0) {
        var primerAlimento = datos.foods[0];
        var html = "<h5>Detalles del alimento</h5>";
        html += "<p><strong>Nombre:</strong> " + primerAlimento.description + "</p>";
        html += "<p><strong>Grupo de alimentos:</strong> " + primerAlimento.foodCategory + "</p>";
        if (primerAlimento.brandOwner) html += "<p><strong>Marca:</strong> " + primerAlimento.brandOwner + "</p>";
        if (primerAlimento.servingSize) html += "<p><strong>Tamaño de porción:</strong> " + primerAlimento.servingSize + " " + primerAlimento.servingSizeUnit + "</p>";
        var carbohidratos = primerAlimento.foodNutrients.find(n => n.nutrientName === "Carbohydrate");
        var proteina = primerAlimento.foodNutrients.find(n => n.nutrientName === "Protein");
        var grasa = primerAlimento.foodNutrients.find(n => n.nutrientName === "Total lipid (fat)");
        if (carbohidratos) html += "<p><strong>Cantidad de carbohidratos:</strong> " + carbohidratos.value + " " + carbohidratos.unitName + "</p>";
        if (proteina) html += "<p><strong>Cantidad de proteínas:</strong> " + proteina.value + " " + proteina.unitName + "</p>";
        if (grasa) html += "<p><strong>Cantidad de grasas:</strong> " + grasa.value + " " + grasa.unitName + "</p>";
        divDetallesAlimento.innerHTML = html;
    } else {
        divDetallesAlimento.innerHTML = "<p>No se encontraron alimentos con ese nombre.</p>";
    }
}

