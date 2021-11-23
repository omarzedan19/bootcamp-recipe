class Renderer {
    constructor() {}
    

    render(data) {
        $('.container').empty();

        const source = $("#recipes-template").html()
        const template = Handlebars.compile(source)
        
        const newHTML = template({results: data})
        
        $('.container').append(newHTML)
    }
}

