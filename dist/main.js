const render = new Renderer()

$('.btn').on('click', (data) => {
    let val = $('.input').val()
    
    $.get(`/recipes/${val}`, (data) => {
        render.render(data)
    })
})

$(document).on('click', '.recipeImg', function() {
    let firstIng = $(this).closest('.recipe').find('.ingredients').find('li:first').text()
    alert(firstIng)
});