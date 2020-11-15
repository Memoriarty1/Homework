
window.onload = function () {
    const contextmenu = {
        name: 'menu',
        type: 'colomn',
        items: [
            {
                title: 'ActionAdd',
                handler: 'ActionAdd'
            },
            {
                title: 'ActionSaveAs',
                handler: 'ActionSaveAs'
            },

            {
                title: 'ActionExit',
                handler: 'ActionExit'
            }
        ]
    }
    const actions = {
        ActionAdd: function () { console.log('ActionAdd')},
        ActionSaveAs: function () {console.log('ActionSaveAs') },
        ActionExit: function () { console.log('ActionExit') }
    }
    function MenuComponent(config, actions) {
        console.log(config, '132123')
        console.log(actions, '132123')
        this.config = config || {};
        this.actions = actions;
        this.container = null;
    }
    MenuComponent.prototype.makeContainer = function () {
        const container = document.createElement('div');
        container.style.display = 'block'
        console.log(this.config.name, 'kek')
        container.classList.add(this.config.type || 'row');
        console.log(container, 'cont v makecontainer')
        return container;
    };
    MenuComponent.prototype.makeItems = function (container) {
        const { items } = this.config;
        const fragment = document.createDocumentFragment()
        items.forEach(({ title, handler }) => {

            const li = document.createElement('button')
            li.classList.add()
            console.log(title)
            li.innerText = title;
            li.addEventListener('click', this.actions[handler])
            console.log(li)
            fragment.append(li);

        })
        return fragment
    };

    MenuComponent.prototype.buttonsOn = function (li) {

    }
    MenuComponent.prototype.makeMenu = function () {
        const container = this.makeContainer();
        console.log(this.makeContainer(), 'thismakecont');
        const items = this.makeItems();
        container.append(items)
        this.container = container
        return this;
    }
    MenuComponent.prototype.render = function () {
        if (this.container) {
            document.body.append(this.container)
        }
        return this
    }
    
    const menu = new MenuComponent(contextmenu, actions);
    
    document.addEventListener('contextmenu', function(event) {
       
        menu.makeMenu()
        .render();
        event.preventDefault();
        
        
    })

   
    document.addEventListener('click', keker)
    function keker(event) {
        const container = document.querySelector('div')
        container.style.display = 'none'
        event.preventDefault();
    }
}