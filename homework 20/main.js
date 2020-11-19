
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
        ActionAdd: function () { console.log('ActionAdd') },
        ActionSaveAs: function () { console.log('ActionSaveAs') },
        ActionExit: function () { console.log('ActionExit') }
    }
    function MenuComponent(config, actions) {
        this.config = config || {};
        this.actions = actions;
        this.container = null;
    }
    MenuComponent.prototype.makeContainer = function () {
        const container = document.createElement('div');
        container.style.visibility = 'visible';
        container.classList.add(this.config.type || 'row');
        document.addEventListener('click', function(event){
            container.style.visibility = 'hidden';
            event.preventDefault();
        })
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            container.style.visibility = 'hidden';
        });
        return container;
    };
    MenuComponent.prototype.makeItems = function () {
        const { items } = this.config;
        const fragment = document.createDocumentFragment()
        items.forEach(({ title, handler }) => {
            const li = document.createElement('button');
            li.innerText = title;
            li.addEventListener('click', this.actions[handler])
            fragment.append(li);
        })
        return fragment
    };

    MenuComponent.prototype.makeMenu = function () {
        const container = this.makeContainer();
        const items = this.makeItems();
        container.append(items);
        this.container = container;
        return this;
    }
    MenuComponent.prototype.render = function (event) {
        if (this.container) {
            let x = event.clientX;
            let y = event.clientY;
            this.container.style.left = `${x}px`;
            this.container.style.top = `${y}px`;
            document.body.append(this.container);
        }
        return this
    }

    const menu = new MenuComponent(contextmenu, actions);

    document.addEventListener('contextmenu',function(event) {
        menu
        .makeMenu()
        .render(event);
        event.preventDefault();
   
    });


};