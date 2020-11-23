
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
        container.style.visibility = 'hidden';
        container.classList.add(this.config.type || 'row');

        return container
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
        console.log(this, 'this makemnuj')
        return this;
    };
    MenuComponent.prototype.render = function () {
        if (this.container) {
            document.body.append(this.container);
        }
        return this
    };

    MenuComponent.prototype.bindEvent = function () {
            const boxHide = this.container;
            document.addEventListener('contextmenu', function (event) {
                boxHide.style.visibility = 'visible';
                boxHide.style.left = `${event.pageX}px`
                boxHide.style.top = `${event.pageY}px`
                event.preventDefault();
            });
            document.addEventListener('click', function (event) {
                boxHide.style.visibility = 'hidden';
            });
        
    };
    const menu = new MenuComponent(contextmenu, actions);
    menu.makeMenu()
        .render()
        .bindEvent()


};
